import 'dotenv/config'
import 'reflect-metadata'
import { KnexConnectionRepository } from '@modules/connection/infra/knex/repositories/ConnectionRepository/KnexConnectionRepository'
import { db } from '@shared/infra/knex/connection'

import { CountConnectionsUseCase } from '../CountConnections/CountConnectionsUseCase'
import { CreateConnectionsUseCase } from './CreateConnectionsUseCase'

describe('CreateConnectionsUseCase', () => {
  const createConnections = new CreateConnectionsUseCase(
    new KnexConnectionRepository(db)
  )
  const countConnections = new CountConnectionsUseCase(
    new KnexConnectionRepository(db)
  )

  beforeAll(async () => {
    await db.migrate.latest()
  })

  afterAll(async () => {
    await db('connections').delete()
  })

  it('should create new connections', async () => {
    let count = await countConnections.execute()

    expect(count).toEqual(0)

    await createConnections.execute(1)
    count = await countConnections.execute()

    expect(count).toEqual(1)

    await createConnections.execute(1)
    count = await countConnections.execute()

    expect(count).toEqual(2)
  })
})
