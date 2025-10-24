require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const axios = require('axios');

const prisma = new PrismaClient();

// Function to fetch all characters from the original API
async function fetchAllCharacters() {
  console.log('Fetching characters...');
  let allCharacters = [];
  let page = 1;
  let hasNext = true;

  while (hasNext) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const { results, info } = response.data;
      
      allCharacters = allCharacters.concat(results);
      
      hasNext = info.next !== null;
      page++;
      
      console.log(`Fetched page ${page-1}, total characters so far: ${allCharacters.length}`);
      
      // Be respectful to the API - add a small delay
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('Error fetching characters:', error.message);
      break;
    }
  }
  
  return allCharacters;
}

// Function to fetch all locations from the original API
async function fetchAllLocations() {
  console.log('Fetching locations...');
  let allLocations = [];
  let page = 1;
  let hasNext = true;

  while (hasNext) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`);
      const { results, info } = response.data;
      
      allLocations = allLocations.concat(results);
      
      hasNext = info.next !== null;
      page++;
      
      console.log(`Fetched page ${page-1}, total locations so far: ${allLocations.length}`);
      
      // Be respectful to the API - add a small delay
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('Error fetching locations:', error.message);
      break;
    }
  }
  
  return allLocations;
}

// Function to fetch all episodes from the original API
async function fetchAllEpisodes() {
  console.log('Fetching episodes...');
  let allEpisodes = [];
  let page = 1;
  let hasNext = true;

  while (hasNext) {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`);
      const { results, info } = response.data;
      
      allEpisodes = allEpisodes.concat(results);
      
      hasNext = info.next !== null;
      page++;
      
      console.log(`Fetched page ${page-1}, total episodes so far: ${allEpisodes.length}`);
      
      // Be respectful to the API - add a small delay
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('Error fetching episodes:', error.message);
      break;
    }
  }
  
  return allEpisodes;
}

// Function to populate the database
async function populateDatabase() {
  try {
    console.log('Starting database population...');
    
    // Fetch all data from the original API
    const [characters, locations, episodes] = await Promise.all([
      fetchAllCharacters(),
      fetchAllLocations(),
      fetchAllEpisodes()
    ]);
    
    console.log(`Fetched ${characters.length} characters, ${locations.length} locations, ${episodes.length} episodes`);
    
    // Clear existing data
    console.log('Clearing existing data...');
    await prisma.character.deleteMany({});
    await prisma.location.deleteMany({});
    await prisma.episode.deleteMany({});
    
    // Process and insert locations first (since characters reference locations)
    console.log('Inserting locations...');
    const locationPromises = locations.map(loc => 
      prisma.location.upsert({
        where: { apiId: loc.id },
        update: {
          name: loc.name,
          type: loc.type,
          dimension: loc.dimension,
          url: loc.url,
          created: loc.created ? new Date(loc.created) : null,
        },
        create: {
          apiId: loc.id,
          name: loc.name,
          type: loc.type,
          dimension: loc.dimension,
          url: loc.url,
          created: loc.created ? new Date(loc.created) : null,
        }
      })
    );
    
    await Promise.all(locationPromises);
    console.log('Locations inserted successfully');
    
    // Process and insert episodes
    console.log('Inserting episodes...');
    const episodePromises = episodes.map(ep => 
      prisma.episode.upsert({
        where: { apiId: ep.id },
        update: {
          name: ep.name,
          airDate: ep.air_date,
          episode: ep.episode,
          url: ep.url,
          created: ep.created ? new Date(ep.created) : null,
        },
        create: {
          apiId: ep.id,
          name: ep.name,
          airDate: ep.air_date,
          episode: ep.episode,
          url: ep.url,
          created: ep.created ? new Date(ep.created) : null,
        }
      })
    );
    
    await Promise.all(episodePromises);
    console.log('Episodes inserted successfully');
    
    // Process and insert characters
    console.log('Inserting characters...');
    const characterPromises = characters.map(char => 
      prisma.character.upsert({
        where: { apiId: char.id },
        update: {
          name: char.name,
          status: char.status,
          species: char.species,
          type: char.type,
          gender: char.gender,
          origin: char.origin && char.origin.url ? {
            connect: { apiId: parseInt(char.origin.url.split('/').pop()) }
          } : undefined,
          location: char.location && char.location.url ? {
            connect: { apiId: parseInt(char.location.url.split('/').pop()) }
          } : undefined,
          image: char.image,
          url: char.url,
          created: char.created ? new Date(char.created) : null,
          // Note: episode field is removed as it's not in the schema
        },
        create: {
          apiId: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          type: char.type,
          gender: char.gender,
          origin: char.origin && char.origin.url ? {
            connect: { apiId: parseInt(char.origin.url.split('/').pop()) }
          } : undefined,
          location: char.location && char.location.url ? {
            connect: { apiId: parseInt(char.location.url.split('/').pop()) }
          } : undefined,
          image: char.image,
          url: char.url,
          created: char.created ? new Date(char.created) : null,
          // Note: episode field is removed as it's not in the schema
        }
      })
    );
    
    await Promise.all(characterPromises);
    console.log('Characters inserted successfully');
    
    console.log('Database population completed successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the population script
populateDatabase();