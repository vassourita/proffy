import 'dotenv/config'
import 'reflect-metadata'
import { KnexConnectionRepository } from '@modules/connection/infra/knex/repositories/ConnectionRepository/KnexConnectionRepository'
import { db } from '@shared/infra/knex/connection'

describe('KnexConnectionRepository', () => {
  const repository = new KnexConnectionRepository()

  beforeAll(async () => {
    await db.migrate.latest()
  })

  beforeEach(async () => {
    await db('connections').delete()
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
    const count = await repository.count()

    expect(count).toEqual(3)
  })

  it('should create new connections', async () => {
    let count = await repository.count()

    expect(count).toEqual(3)

    await repository.create(1)
    count = await repository.count()

    expect(count).toEqual(4)

    await repository.create(1)
    count = await repository.count()

    expect(count).toEqual(5)
  })
})
