import 'dotenv/config'
import 'reflect-metadata'
import { KnexConnectionRepository } from '@modules/connection/infra/knex/repositories/ConnectionRepository/KnexConnectionRepository'
import { db } from '@shared/infra/knex/connection'

import { CountConnectionsUseCase } from './CountConnectionsUseCase'

describe('CountConnectionsUseCase', () => {
  const countConnections = new CountConnectionsUseCase(
    new KnexConnectionRepository(db)
  )

  beforeAll(async () => {
    await db.migrate.latest()

    await db('connections').insert({
      user_id: 1
    })
    await db('connections').insert({
      user_id: 1
    })
    await db('connections').insert({
      user_id: 1
    })
  })

  afterAll(async () => {
    await db('connections').delete()
  })

  it('should count all the connections', async () => {
    const count = await countConnections.execute()

    expect(count).toEqual(3)
  })
})
