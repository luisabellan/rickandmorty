const { PrismaClient } = require('@prisma/client')
require('dotenv').config({ path: '.env.local' })

const prisma = new PrismaClient()

module.exports = { prisma }