import Knex from 'knex'

import { IConnectionRepository } from '@modules/connection/repositories/ConnectionRepository/IConnectionRepository'
import { db } from '@shared/infra/knex/connection'

export class KnexConnectionRepository implements IConnectionRepository {
  private readonly knex: Knex

  constructor(knex = db) {
    this.knex = knex
  }

  async count(): Promise<number> {
    const totalConnections = await this.knex('connections').count('* as total')

    const { total } = totalConnections[0]

    return Number(total)
  }

  async create(userId: number): Promise<void> {
    await this.knex('connections').insert({
      user_id: userId
    })
  }
}
