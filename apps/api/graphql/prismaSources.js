const { prisma } = require('../utils/prisma');

class PrismaCharacter {
  async characters({ filter, page = 1 }) {
    const limit = 20; // Standard page size
    const skip = (page - 1) * limit;

    // Build the where clause based on filters
    const whereClause = {};
    
    if (filter) {
      // Handle exact match filters
      if (filter.name) whereClause.name = { contains: filter.name, mode: 'insensitive' };
      if (filter.status) whereClause.status = { equals: filter.status, mode: 'insensitive' };
      if (filter.species) whereClause.species = { equals: filter.species, mode: 'insensitive' };
      if (filter.type) whereClause.type = { equals: filter.type, mode: 'insensitive' };
      if (filter.gender) whereClause.gender = { equals: filter.gender, mode: 'insensitive' };
      
      // Handle current location filtering
      if (filter.location) {
        whereClause.location = {
          name: { contains: filter.location, mode: 'insensitive' }
        };
      }

      // Handle origin location filtering
      if (filter.origin) {
        whereClause.origin = {
          name: { contains: filter.origin, mode: 'insensitive' }
        };
      }
    }

    // Get the results with pagination
    const [results, totalCount] = await Promise.all([
      prisma.character.findMany({
        where: whereClause,
        skip,
        take: limit,
        include: {
          location: true,
          origin: true,
          episodes: true,
        }
      }),
      prisma.character.count({ where: whereClause })
    ]);

    // Transform the results to match the expected format
    const transformedResults = results.map(char => ({
      ...char,
      id: char.apiId.toString(), // Convert to string to match API format
      origin: char.origin ? {
        id: char.origin.apiId.toString(),
        name: char.origin.name,
        type: char.origin.type,
        dimension: char.origin.dimension,
        residents: [], // Will be resolved separately if needed
        created: char.origin.created ? char.origin.created.toISOString() : null
      } : null,
      location: char.location ? {
        id: char.location.apiId.toString(),
        name: char.location.name,
        type: char.location.type,
        dimension: char.location.dimension,
        residents: [], // Will be resolved separately if needed
        created: char.location.created ? char.location.created.toISOString() : null
      } : null,
      episode: char.episodes ? char.episodes.map(ep => ({
        id: ep.apiId.toString(),
        name: ep.name,
        air_date: ep.airDate,
        episode: ep.episode,
        created: ep.created ? ep.created.toISOString() : null
      })) : [],
      created: char.created ? char.created.toISOString() : null
    }));

    return {
      results: transformedResults,
      info: {
        count: totalCount,
        pages: Math.ceil(totalCount / limit),
        next: page * limit < totalCount ? page + 1 : null,
        prev: page > 1 ? page - 1 : null
      }
    };
  }

  async charactersByIds({ ids }) {
    const results = await prisma.character.findMany({
      where: {
        apiId: { in: ids.map(id => parseInt(id)) }
      },
      include: {
        location: true,
        origin: true,
        episodes: true,
      }
    });

    return results.map(char => ({
      ...char,
      id: char.apiId.toString(),
      origin: char.origin ? {
        id: char.origin.apiId.toString(),
        name: char.origin.name,
        type: char.origin.type,
        dimension: char.origin.dimension,
        residents: [],
        created: char.origin.created ? char.origin.created.toISOString() : null
      } : null,
      location: char.location ? {
        id: char.location.apiId.toString(),
        name: char.location.name,
        type: char.location.type,
        dimension: char.location.dimension,
        residents: [],
        created: char.location.created ? char.location.created.toISOString() : null
      } : null,
      episode: char.episodes ? char.episodes.map(ep => ({
        id: ep.apiId.toString(),
        name: ep.name,
        air_date: ep.airDate,
        episode: ep.episode,
        created: ep.created ? ep.created.toISOString() : null
      })) : [],
      created: char.created ? char.created.toISOString() : null
    }));
  }

  async character({ id }) {
    const result = await prisma.character.findUnique({
      where: { apiId: parseInt(id) },
      include: {
        location: true,
        origin: true,
        episodes: true,
      }
    });

    if (!result) return null;

    return {
      ...result,
      id: result.apiId.toString(),
      origin: result.origin ? {
        id: result.origin.apiId.toString(),
        name: result.origin.name,
        type: result.origin.type,
        dimension: result.origin.dimension,
        residents: [],
        created: result.origin.created ? result.origin.created.toISOString() : null
      } : null,
      location: result.location ? {
        id: result.location.apiId.toString(),
        name: result.location.name,
        type: result.location.type,
        dimension: result.location.dimension,
        residents: [],
        created: result.location.created ? result.location.created.toISOString() : null
      } : null,
      episode: result.episodes ? result.episodes.map(ep => ({
        id: ep.apiId.toString(),
        name: ep.name,
        air_date: ep.airDate,
        episode: ep.episode,
        created: ep.created ? ep.created.toISOString() : null
      })) : [],
      created: result.created ? result.created.toISOString() : null
    };
  }
}

class PrismaLocation {
  async locations({ filter, page = 1 }) {
    const limit = 20;
    const skip = (page - 1) * limit;

    const whereClause = {};
    if (filter) {
      if (filter.name) whereClause.name = { contains: filter.name, mode: 'insensitive' };
      if (filter.type) whereClause.type = { equals: filter.type, mode: 'insensitive' };
      if (filter.dimension) whereClause.dimension = { contains: filter.dimension, mode: 'insensitive' };
    }

    const [results, totalCount] = await Promise.all([
      prisma.location.findMany({
        where: whereClause,
        skip,
        take: limit
      }),
      prisma.location.count({ where: whereClause })
    ]);

    const transformedResults = results.map(loc => ({
      ...loc,
      id: loc.apiId.toString(),
      residents: [], // Will be resolved separately
      created: loc.created ? loc.created.toISOString() : null
    }));

    return {
      results: transformedResults,
      info: {
        count: totalCount,
        pages: Math.ceil(totalCount / limit),
        next: page * limit < totalCount ? page + 1 : null,
        prev: page > 1 ? page - 1 : null
      }
    };
  }

  async locationsByIds({ ids }) {
    const results = await prisma.location.findMany({
      where: {
        apiId: { in: ids.map(id => parseInt(id)) }
      }
    });

    return results.map(loc => ({
      ...loc,
      id: loc.apiId.toString(),
      residents: [],
      created: loc.created ? loc.created.toISOString() : null
    }));
  }

  async location({ id }) {
    const result = await prisma.location.findUnique({
      where: { apiId: parseInt(id) }
    });

    if (!result) return null;

    return {
      ...result,
      id: result.apiId.toString(),
      residents: [],
      created: result.created ? result.created.toISOString() : null
    };
  }
}

class PrismaEpisode {
  async episodes({ filter, page = 1 }) {
    const limit = 20;
    const skip = (page - 1) * limit;

    const whereClause = {};
    if (filter) {
      if (filter.name) whereClause.name = { contains: filter.name, mode: 'insensitive' };
      if (filter.episode) whereClause.episode = { contains: filter.episode, mode: 'insensitive' };
    }

    const [results, totalCount] = await Promise.all([
      prisma.episode.findMany({
        where: whereClause,
        skip,
        take: limit
      }),
      prisma.episode.count({ where: whereClause })
    ]);

    const transformedResults = results.map(ep => ({
      ...ep,
      id: ep.apiId.toString(),
      characters: [],
      created: ep.created ? ep.created.toISOString() : null
    }));

    return {
      results: transformedResults,
      info: {
        count: totalCount,
        pages: Math.ceil(totalCount / limit),
        next: page * limit < totalCount ? page + 1 : null,
        prev: page > 1 ? page - 1 : null
      }
    };
  }

  async episodesByIds({ ids }) {
    const results = await prisma.episode.findMany({
      where: {
        apiId: { in: ids.map(id => parseInt(id)) }
      }
    });

    return results.map(ep => ({
      ...ep,
      id: ep.apiId.toString(),
      characters: [],
      created: ep.created ? ep.created.toISOString() : null
    }));
  }

  async episode({ id }) {
    const result = await prisma.episode.findUnique({
      where: { apiId: parseInt(id) }
    });

    if (!result) return null;

    return {
      ...result,
      id: result.apiId.toString(),
      characters: [],
      created: result.created ? result.created.toISOString() : null
    };
  }
}

module.exports = { PrismaCharacter, PrismaLocation, PrismaEpisode };