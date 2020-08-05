import knex from 'knex'

const config = require('../../../../knexfile')

export const db = knex(config[process.env.NODE_ENV || 'development'])
