import 'dotenv/config'
import { Config } from 'knex'

interface KnexFileConfig {
  development?: Config
  production?: Config
  staging?: Config
  test?: Config
}

const config: KnexFileConfig = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/shared/infra/knex/migrations`
    }
  },
  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/shared/infra/knex/migrations`
    }
  }
}

module.exports = config
