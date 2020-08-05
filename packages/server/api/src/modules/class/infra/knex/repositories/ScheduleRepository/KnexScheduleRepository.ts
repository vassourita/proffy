import Knex from 'knex'

import { ICreateScheduleDTO } from '@modules/class/repositories/ScheduleRepository/ICreateScheduleDTO'
import { IScheduleRepository } from '@modules/class/repositories/ScheduleRepository/IScheduleRepository'
import { db } from '@shared/infra/knex/connection'

export class KnexScheduleRepository implements IScheduleRepository {
  private readonly knex: Knex

  constructor(knex = db) {
    this.knex = knex
  }

  async createMany(data: ICreateScheduleDTO[]): Promise<number[]> {
    const classSchedule = data.map(scheduleItem => ({
      class_id: scheduleItem.classId,
      week_day: scheduleItem.weekDay,
      from: scheduleItem.from,
      to: scheduleItem.to
    }))

    const ids = await this.knex('class_schedule')
      .insert(classSchedule)
      .returning('id')

    return ids
  }
}
