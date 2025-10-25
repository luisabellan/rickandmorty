const { PrismaClient } = require('@prisma/client')
const axios = require('axios')

const prisma = new PrismaClient()

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/api'

async function seedCharacters() {
  console.log('🚀 Fetching characters from Rick and Morty API...')

  let page = 1
  let hasNextPage = true
  let totalCharacters = 0

  while (hasNextPage) {
    try {
      const response = await axios.get(`${RICK_AND_MORTY_API}/character?page=${page}`)
      const { results, info } = response.data

      console.log(`📄 Processing page ${page} of ${info.pages}...`)

      for (const char of results) {
        // Extract origin and location IDs
        const originId = char.origin.url ? parseInt(char.origin.url.split('/').pop()) : null
        const locationId = char.location.url ? parseInt(char.location.url.split('/').pop()) : null

        await prisma.character.upsert({
          where: { apiId: char.id },
          update: {
            name: char.name,
            status: char.status,
            species: char.species,
            type: char.type || '',
            gender: char.gender,
            originId: originId,
            locationId: locationId,
            image: char.image,
            url: char.url,
            created: new Date(char.created),
          },
          create: {
            apiId: char.id,
            name: char.name,
            status: char.status,
            species: char.species,
            type: char.type || '',
            gender: char.gender,
            originId: originId,
            locationId: locationId,
            image: char.image,
            url: char.url,
            created: new Date(char.created),
          },
        })

        totalCharacters++
      }

      hasNextPage = info.next !== null
      page++

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`❌ Error on page ${page}:`, error.message)
      hasNextPage = false
    }
  }

  console.log(`✅ Seeded ${totalCharacters} characters!`)
}

async function seedLocations() {
  console.log('🌍 Fetching locations from Rick and Morty API...')

  let page = 1
  let hasNextPage = true
  let totalLocations = 0

  while (hasNextPage) {
    try {
      const response = await axios.get(`${RICK_AND_MORTY_API}/location?page=${page}`)
      const { results, info } = response.data

      console.log(`📄 Processing page ${page} of ${info.pages}...`)

      for (const loc of results) {
        await prisma.location.upsert({
          where: { apiId: loc.id },
          update: {
            name: loc.name,
            type: loc.type,
            dimension: loc.dimension,
            url: loc.url,
            created: new Date(loc.created),
          },
          create: {
            apiId: loc.id,
            name: loc.name,
            type: loc.type,
            dimension: loc.dimension,
            url: loc.url,
            created: new Date(loc.created),
          },
        })

        totalLocations++
      }

      hasNextPage = info.next !== null
      page++

      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`❌ Error on page ${page}:`, error.message)
      hasNextPage = false
    }
  }

  console.log(`✅ Seeded ${totalLocations} locations!`)
}

async function seedEpisodes() {
  console.log('📺 Fetching episodes from Rick and Morty API...')

  let page = 1
  let hasNextPage = true
  let totalEpisodes = 0

  while (hasNextPage) {
    try {
      const response = await axios.get(`${RICK_AND_MORTY_API}/episode?page=${page}`)
      const { results, info } = response.data

      console.log(`📄 Processing page ${page} of ${info.pages}...`)

      for (const ep of results) {
        await prisma.episode.upsert({
          where: { apiId: ep.id },
          update: {
            name: ep.name,
            airDate: ep.air_date,
            episode: ep.episode,
            url: ep.url,
            created: new Date(ep.created),
          },
          create: {
            apiId: ep.id,
            name: ep.name,
            airDate: ep.air_date,
            episode: ep.episode,
            url: ep.url,
            created: new Date(ep.created),
          },
        })

        totalEpisodes++
      }

      hasNextPage = info.next !== null
      page++

      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`❌ Error on page ${page}:`, error.message)
      hasNextPage = false
    }
  }

  console.log(`✅ Seeded ${totalEpisodes} episodes!`)
}

async function main() {
  console.log('🌱 Starting database seed...\n')

  try {
    // Seed in order: locations first (referenced by characters), then characters, then episodes
    await seedLocations()
    await seedCharacters()
    await seedEpisodes()

    console.log('\n🎉 Database seeding completed successfully!')
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
