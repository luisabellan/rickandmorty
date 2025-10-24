const { prisma } = require('../utils/prisma')
const { message: messages, collection } = require('../utils/helpers')
const { catchErrors } = require('./errors')

// Map Prisma models to match the expected interface
const models = {
  character: {
    modelName: 'Character',
    find: (options) => {
      // Process query options to map to Prisma format
      const where = buildWhereClause(options, 'character');
      return prisma.character.findMany({
        where,
        include: {
          location: true,
          origin: true,
          episodes: true
        },
        skip: options.skip,
        take: collection.limit
      })
    },
    findOne: (options) => {
      const where = { apiId: parseInt(options.id) };
      return prisma.character.findUnique({
        where,
        include: {
          location: true,
          origin: true,
          episodes: true
        }
      })
    },
    findAndCount: async (options) => {
      const where = buildWhereClause(options, 'character');
      const results = await prisma.character.findMany({
        where,
        include: {
          location: true,
          origin: true,
          episodes: true
        },
        skip: options.skip,
        take: collection.limit
      })
      const count = await prisma.character.count({ where })
      return { results, count }
    },
    structure: (data) => {
      if (Array.isArray(data)) {
        return data.map(item => {
          // Remove excluded fields based on collection.exclude
          const itemWithoutExcluded = removeExcludedFields(item);
          return {
            ...itemWithoutExcluded,
            id: item.apiId,
            location: item.location ? { id: item.location.apiId, name: item.location.name } : null,
            origin: item.origin ? { id: item.origin.apiId, name: item.origin.name } : null,
          }
        })
      } else if (data) {
        const itemWithoutExcluded = removeExcludedFields(data);
        return {
          ...itemWithoutExcluded,
          id: data.apiId,
          location: data.location ? { id: data.location.apiId, name: data.location.name } : null,
          origin: data.origin ? { id: data.origin.apiId, name: data.origin.name } : null,
        }
      }
      return data
    }
  },
  location: {
    modelName: 'Location',
    find: (options) => {
      const where = buildWhereClause(options, 'location');
      return prisma.location.findMany({
        where,
        include: {
          currentResidents: true,
          residents: true
        },
        skip: options.skip,
        take: collection.limit
      })
    },
    findOne: (options) => {
      const where = { apiId: parseInt(options.id) };
      return prisma.location.findUnique({
        where,
        include: {
          currentResidents: true,
          residents: true
        }
      })
    },
    findAndCount: async (options) => {
      const where = buildWhereClause(options, 'location');
      const results = await prisma.location.findMany({
        where,
        include: {
          currentResidents: true,
          residents: true
        },
        skip: options.skip,
        take: collection.limit
      })
      const count = await prisma.location.count({ where })
      return { results, count }
    },
    structure: (data) => {
      if (Array.isArray(data)) {
        return data.map(item => {
          const itemWithoutExcluded = removeExcludedFields(item);
          return {
            ...itemWithoutExcluded,
            id: item.apiId
          }
        })
      } else if (data) {
        const itemWithoutExcluded = removeExcludedFields(data);
        return {
          ...itemWithoutExcluded,
          id: data.apiId
        }
      }
      return data
    }
  },
  episode: {
    modelName: 'Episode',
    find: (options) => {
      const where = buildWhereClause(options, 'episode');
      return prisma.episode.findMany({
        where,
        include: {
          characters: true
        },
        skip: options.skip,
        take: collection.limit
      })
    },
    findOne: (options) => {
      const where = { apiId: parseInt(options.id) };
      return prisma.episode.findUnique({
        where,
        include: {
          characters: true
        }
      })
    },
    findAndCount: async (options) => {
      const where = buildWhereClause(options, 'episode');
      const results = await prisma.episode.findMany({
        where,
        include: {
          characters: true
        },
        skip: options.skip,
        take: collection.limit
      })
      const count = await prisma.episode.count({ where })
      return { results, count }
    },
    structure: (data) => {
      if (Array.isArray(data)) {
        return data.map(item => {
          const itemWithoutExcluded = removeExcludedFields(item);
          return {
            ...itemWithoutExcluded,
            id: item.apiId
          }
        })
      } else if (data) {
        const itemWithoutExcluded = removeExcludedFields(data);
        return {
          ...itemWithoutExcluded,
          id: data.apiId
        }
      }
      return data
    }
  }
}

// Helper function to remove excluded fields
function removeExcludedFields(item) {
  // Parse the exclude string from collection.exclude
  const excludeFields = collection.exclude.split(' ').filter(field => field.startsWith('-')).map(field => field.substring(1));
  
  // Create a new object without excluded fields
  const result = { ...item };
  excludeFields.forEach(field => {
    delete result[field];
  });
  
  return result;
}

// Helper function to build Prisma where clause from query parameters
function buildWhereClause(options, modelType) {
  const { skip, ...query } = options;
  const where = {};
  
  // Add specific query parameters based on model type
  if (modelType === 'character') {
    if (query.name) where.name = { contains: query.name, mode: 'insensitive' };
    if (query.status) where.status = { equals: query.status, mode: 'insensitive' };
    if (query.species) where.species = { contains: query.species, mode: 'insensitive' };
    if (query.type) where.type = { contains: query.type, mode: 'insensitive' };
    if (query.gender) where.gender = { equals: query.gender, mode: 'insensitive' };
  } else if (modelType === 'location') {
    if (query.name) where.name = { contains: query.name, mode: 'insensitive' };
    if (query.dimension) where.dimension = { contains: query.dimension, mode: 'insensitive' };
    if (query.type) where.type = { contains: query.type, mode: 'insensitive' };
  } else if (modelType === 'episode') {
    if (query.name) where.name = { contains: query.name, mode: 'insensitive' };
    if (query.episode) where.episode = { contains: query.episode, mode: 'insensitive' };
  }
  
  return where;
}

const buildResponse = ({ data, status, message }) => {
  if (data) {
    return {
      data,
      error: null,
    }
  }

  return {
    data: null,
    error: {
      message,
      status,
    },
  }
}

const queryById = async (Model, id) => {
  // If the param is an array
  if (Array.isArray(id)) {
    const data = await Promise.all(id.map(async (apiId) => {
      const item = await Model.findOne({ id: apiId });
      return item;
    }));

    return buildResponse({ data: Model.structure(data) })
  }

  // If the param is a number
  if (Number.isNaN(parseInt(id))) {
    return buildResponse({ status: 500, message: messages.badParam })
  }

  const data = await Model.findOne({ id })

  if (!data) {
    return buildResponse({ status: 404, message: messages[`no${Model.modelName}`] })
  }

  return buildResponse({ data: Model.structure(data) })
}

const getAll = async (req, res, next) => {
  const page = (req.query.page > 0 && req.query.page) || 1
  const skip = page * collection.limit - collection.limit
  const [, name] = req.path.split('/')
  const Model = models[name]
  const opt = Object.assign(req.query, { skip })

  const { results, count } = await Model.findAndCount(opt)

  req.payload = {
    page,
    count,
    results,
  }

  next()
}

const getById = async (req, res, next) => {
  const [, name] = req.path.split('/')
  const Model = models[name]
  const { data, error } = await queryById(Model, req.params.id)

  if (error) {
    return res.status(error.status).json({ error: error.message })
  }

  req.payload = data
  next()
}

module.exports = {
  getAll: catchErrors(getAll),
  getById: catchErrors(getById),
}
