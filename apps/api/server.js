require('dotenv').config()

const path = require('path')
const express = require('express')
const { prisma } = require('./utils/prisma')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')

const app = express()

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { PrismaCharacter, PrismaLocation, PrismaEpisode } = require('./graphql/prismaSources')

const handle = require('./handlers')
const routes = require('./routes')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  validationRules: [handle.depth(4)],
  dataSources: () => ({
    character: new PrismaCharacter(),
    location: new PrismaLocation(),
    episode: new PrismaEpisode(),
  }),
})

/* istanbul ignore next */
if (app.get('env') !== 'test') {
  app.use(
    morgan(':status | :method :url :response-time ms | :remote-addr', {
      skip: (req) => req.method !== 'GET',
    }),
  )
}

app.use(cors())

app.set('trust proxy', 1)

// Apply Apollo middleware first (it has its own body parsing)
server.applyMiddleware({ app })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/character/avatar', express.static(path.join(__dirname, 'images')))
app.use('/api', routes)

app.use(handle.error.notFound)
app.use(handle.error.productionErrors)

const PORT = process.env.PORT || 8080
app.listen(PORT, async () => {
  console.log(
    '\x1b[34m%s\x1b[0m',
    `

  ${app.get('env').toUpperCase()}

  REST      → http://localhost:${PORT}/api/
  GraphQL   → http://localhost:${PORT}${server.graphqlPath}/
  Database  → PostgreSQL with Prisma
  `,
  )
  
  // Graceful shutdown handling
  process.on('SIGINT', async () => {
    console.log('\nGracefully shutting down...')
    await prisma.$disconnect()
    process.exit(0)
  })
})

module.exports = app