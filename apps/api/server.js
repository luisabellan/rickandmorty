require('dotenv').config()

const path = require('path')
const express = require('express')
const { prisma } = require('./utils/prisma')
const morgan = require('morgan')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')

const app = express()

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { PrismaCharacter, PrismaLocation, PrismaEpisode } = require('./graphql/prismaSources')

const handle = require('./handlers')
const routes = require('./routes')

const startServer = async () => {
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

  await server.start();

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

  // Use Express built-in body parsing for REST API routes
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use('/api/character/avatar', express.static(path.join(__dirname, 'images')))
  app.use('/api', routes)

  app.use(handle.error.notFound)
  app.use(handle.error.productionErrors)

  const PORT = process.env.PORT || 4000
  app.listen(PORT, () => {
    console.log(
      '\x1b[34m%s\x1b[0m',
      `\n\n  ${app.get('env').toUpperCase()}\n\n  REST      → http://localhost:${PORT}/api/\n  GraphQL   → http://localhost:${PORT}${server.graphqlPath}/\n  Database  → PostgreSQL with Prisma\n  `,
    )
  })
  
  // Graceful shutdown handling
  process.on('SIGINT', async () => {
    console.log('\nGracefully shutting down...')
    await prisma.$disconnect()
    process.exit(0)
  })
}

startServer().catch(error => {
  console.error('Error starting server:', error);
  process.exit(1);
});

module.exports = app