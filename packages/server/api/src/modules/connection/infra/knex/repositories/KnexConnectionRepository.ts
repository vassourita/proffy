import { IConnectionRepository } from '@modules/connection/repositories/IConnectionRepository'
import { db } from '@shared/infra/knex/connection'

export class KnexConnectionRepository implements IConnectionRepository {
  async count(): Promise<number> {
    const totalConnections = await db('connections').count('* as total')

    const { total } = totalConnections[0]

    return Number(total)
  }

  async create(userId: string): Promise<void> {
    await db('connections').insert({
      user_id: userId
    })
  }
}
