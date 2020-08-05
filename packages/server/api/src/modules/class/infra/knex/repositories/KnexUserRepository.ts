import Knex from 'knex'

import { ICreateUserDTO } from '@modules/class/repositories/UserRepository/ICreateClassDTO'
import { IUserRepository } from '@modules/class/repositories/UserRepository/IUserRepository'
import { db } from '@shared/infra/knex/connection'

export class KnexUserRepository implements IUserRepository {
  private readonly knex: Knex

  constructor(knex = db) {
    this.knex = knex
  }

  async create({
    avatar,
    bio,
    name,
    whatsapp
  }: ICreateUserDTO): Promise<number> {
    const ids = await this.knex('users').insert({
      name,
      avatar,
      whatsapp,
      bio
    })
    return ids[0]
  }
}
