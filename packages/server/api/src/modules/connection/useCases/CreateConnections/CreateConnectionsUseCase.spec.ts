import 'dotenv/config'
import 'reflect-metadata'
import { FakeConnectionRepository } from '@modules/connection/repositories/ConnectionRepository/FakeConnectionRepository'

import { CreateConnectionsUseCase } from './CreateConnectionsUseCase'

describe('CreateConnectionsUseCase', () => {
  const repo = new FakeConnectionRepository()
  const createConnections = new CreateConnectionsUseCase(repo)

  it('should create new connections', async () => {
    await createConnections.execute(1)
    await createConnections.execute(3)

    expect(repo.connections).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: 1
        }),
        expect.objectContaining({
          userId: 3
        })
      ])
    )
  })
})
