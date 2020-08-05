import Knex from 'knex'

export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary()

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.dropTable('connections')
}
