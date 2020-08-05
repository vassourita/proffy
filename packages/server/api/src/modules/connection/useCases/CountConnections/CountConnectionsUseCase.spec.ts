import 'dotenv/config'
import 'reflect-metadata'

import { FakeConnectionRepository } from '@modules/connection/repositories/ConnectionRepository/FakeConnectionRepository'

import { CountConnectionsUseCase } from './CountConnectionsUseCase'

describe('CountConnectionsUseCase', () => {
  const repo = new FakeConnectionRepository()
  const countConnections = new CountConnectionsUseCase(repo)

  it('should count all the connections', async () => {
    const count = await countConnections.execute()

    expect(count).toEqual(0)
  })
})
