import { KnexConnectionRepository } from '@modules/connection/infra/knex/repositories/KnexConnectionRepository'
import { db } from '@shared/infra/knex/connection'

import { CountConnectionsUseCase } from './CountConnectionsUseCase'

describe('CountConnectionsUseCase', () => {
  const countConnectionsUseCase = new CountConnectionsUseCase(
    new KnexConnectionRepository(db)
  )

  beforeAll(async () => {
    await db.migrate.latest()
  })

  it('should count all the connections', async () => {
    const count = await countConnectionsUseCase.execute()
  })
})