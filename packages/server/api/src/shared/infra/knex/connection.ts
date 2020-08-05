import knex, { Config } from 'knex'

interface KnexFileConfig {
  development?: Config
  production?: Config
  staging?: Config
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
      directory: `${__dirname}/migrations`
    }
  }
}

const db = knex(config[process.env.NODE_ENV || 'development'])

export default db
