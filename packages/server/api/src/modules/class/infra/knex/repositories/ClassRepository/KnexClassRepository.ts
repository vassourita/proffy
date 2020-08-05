import Knex from 'knex'

import { ClassWithUser } from '@modules/class/entities/ClassWithUser'
import { IClassRepository } from '@modules/class/repositories/ClassRepository/IClassRepository'
import { ICreateClassDTO } from '@modules/class/repositories/ClassRepository/ICreateClassDTO'
import { IFindClassByDateAndSubjectDTO } from '@modules/class/repositories/ClassRepository/IFindClassByDateAndSubjectDTO'
import { db } from '@shared/infra/knex/connection'

export class KnexClassRepository implements IClassRepository {
  private readonly knex: Knex

  constructor(knex = db) {
    this.knex = knex
  }

  async findByDateAndSubject(
    data: IFindClassByDateAndSubjectDTO
  ): Promise<ClassWithUser[]> {
    const classes = await this.knex('classes')
      .where('classes.subject', '=', data.subject)
      .whereExists(function () {
        this.select('*')
          .from('class_schedule')
          .whereRaw('"class_schedule"."class_id" = "classes"."id"')
          .whereRaw('"class_schedule"."week_day" = ??', [data.weekDay])
          .whereRaw('"class_schedule"."from" <= ??', [data.hour])
          .whereRaw('"class_schedule"."to" > ??', [data.hour])
      })
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return classes.map(
      clazz =>
        new ClassWithUser({
          ...clazz,
          userId: clazz.user_id
        })
    )
  }

  async create(data: ICreateClassDTO): Promise<number> {
    const ids = await this.knex('classes')
      .insert({
        subject: data.subject,
        cost: data.cost,
        user_id: data.userId
      })
      .returning('id')
    return ids[0]
  }
}
