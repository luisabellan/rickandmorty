const checkArray = (res) => (Array.isArray(res) ? res : [res])

const urlToId = (url) => {
  const getId = (str) => parseInt(str.match(/\d+$/))
  return Array.isArray(url) ? url.map((item) => getId(item)) : getId(url)
}

const handleInfo = ({ stats }) => {
  const getPage = (url) => {
    const params = new URL(url)
    return parseInt(params.searchParams.get('page'))
  }

  return {
    ...stats,
    next: () => (stats && stats.next ? getPage(stats.next) : null),
    prev: () => (stats && stats.prev ? getPage(stats.prev) : null),
  }
}

/**
 * @param {"ID" | "IDs" | "FILTER"} type
 */
const catch404 = (type, error) => {
  if (error.extensions.response.status === 404) {
    if (type === 'FILTER') {
      return { results: [] }
    } else if (type === 'IDs') {
      return []
    }
    return null
  }

  throw error
}

const resolvers = {
  Query: {
    characters: async (_, { page, filter }, { dataSources }) => {
      // For Prisma data source, the result is already formatted correctly
      const result = await dataSources.character
        .characters({ page, filter })
        .catch((error) => catch404('FILTER', error))
      
      // If result has info property, return as is
      if (result && result.info) {
        return result;
      }
      
      // Otherwise, format it properly
      return { 
        results: result || [], 
        info: { count: result?.length || 0, pages: 1, next: null, prev: null } 
      };
    },
    charactersByIds: async (_, { ids }, { dataSources }) => {
      return dataSources.character.charactersByIds({ ids }).catch((error) => catch404('IDs', error))
    },
    character: async (_, { id }, { dataSources }) => {
      return dataSources.character.character({ id }).catch((error) => catch404('ID', error))
    },
    locations: async (_, { page, filter }, { dataSources }) => {
      const result = await dataSources.location
        .locations({ page, filter })
        .catch((error) => catch404('FILTER', error))
      
      if (result && result.info) {
        return result;
      }
      
      return { 
        results: result || [], 
        info: { count: result?.length || 0, pages: 1, next: null, prev: null } 
      };
    },
    locationsByIds: async (_, { ids }, { dataSources }) => {
      return dataSources.location.locationsByIds({ ids }).catch((error) => catch404('IDs', error))
    },
    location: async (_, { id }, { dataSources }) => {
      return dataSources.location.location({ id }).catch((error) => catch404('ID', error))
    },
    episodes: async (_, { page, filter }, { dataSources }) => {
      const result = await dataSources.episode
        .episodes({ page, filter })
        .catch((error) => catch404('FILTER', error))
      
      if (result && result.info) {
        return result;
      }
      
      return { 
        results: result || [], 
        info: { count: result?.length || 0, pages: 1, next: null, prev: null } 
      };
    },
    episodesByIds: async (_, { ids }, { dataSources }) => {
      return dataSources.episode.episodesByIds({ ids }).catch((error) => catch404('IDs', error))
    },
    episode: async (_, { id }, { dataSources }) => {
      return dataSources.episode.episode({ id }).catch((error) => catch404('ID', error))
    },
  },
  Character: {
    // For Prisma-based characters, location and origin are already resolved
    // But we might need to handle the case where they come from external API
    episode: async ({ episode }, _, { dataSources }) => {
      if (Array.isArray(episode) && episode.length > 0 && typeof episode[0] === 'string') {
        // This is likely from external API, where episode is a URL array
        const res = await dataSources.episode.episode({ id: urlToId(episode) })
        return checkArray(res)
      }
      // Otherwise, it's from Prisma and should already be resolved
      return episode || []
    },
    location: async ({ location }, _, { dataSources }) => {
      if (!location) return null;
      if (typeof location === 'object') {
        // Location is already resolved from Prisma
        return location;
      }
      // If location is an ID or URL, fetch it from the data source
      if (location.name === 'unknown') return location;
      const res = await dataSources.location.location({ id: urlToId(location.url) })
      return res
    },
    origin: async ({ origin }, _, { dataSources }) => {
      if (!origin) return null;
      if (typeof origin === 'object') {
        // Origin is already resolved from Prisma
        return origin;
      }
      // If origin is an ID or URL, fetch it from the data source
      if (origin.name === 'unknown') return origin;
      const res = await dataSources.location.location({ id: urlToId(origin.url) })
      return res
    },
  },
  Location: {
    residents: async ({ residents }, _, { dataSources }) => {
      if (!residents || (residents && !residents.length)) return []
      // For Prisma-based locations, residents might already be resolved
      if (residents.length > 0 && typeof residents[0] === 'object') {
        return residents;
      }
      // Otherwise, fetch from data source
      const res = await dataSources.character.character({ id: urlToId(residents) })
      return checkArray(res)
    },
  },
  Episode: {
    characters: async ({ characters }, _, { dataSources }) => {
      // For Prisma-based episodes, characters might already be resolved
      if (characters && typeof characters[0] === 'object') {
        return characters;
      }
      // Otherwise, fetch from data source
      const res = await dataSources.character.character({ id: urlToId(characters) })
      return checkArray(res)
    },
  },
}

module.exports = resolvers
