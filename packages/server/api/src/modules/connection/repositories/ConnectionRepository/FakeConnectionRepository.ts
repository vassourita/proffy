import { IConnectionRepository } from './IConnectionRepository'

export class FakeConnectionRepository implements IConnectionRepository {
  public connections = []

  async count(): Promise<number> {
    return this.connections.length
  }

  async create(userId: number): Promise<void> {
    const id = this.connections.length + 1

    this.connections.push({
      userId,
      id
    })
  }
}
