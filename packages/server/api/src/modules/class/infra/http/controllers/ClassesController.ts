import { Response, Request } from 'express'
import { injectable } from 'tsyringe'

import { IRestController } from '@shared/infra/http/protocols/IRestController'
import { db } from '@shared/infra/knex/connection'
import convertHourToMinutes from '@shared/utils/convertHourToMinutes'

interface ScheduleItem {
  weekDay: number
  from: string
  to: string
}

@injectable()
export class ClassesController implements IRestController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const filters = req.query

      const subject = filters.subject as string
      const weekDay = filters.week_day as string
      const time = filters.time as string

      if (!weekDay || !subject || !time) {
        return res.status(400).json({
          error: 'Missing filters to search classes'
        })
      }

      const timeInMinutes = convertHourToMinutes(time)

      const classes = await db('classes')
        .where('classes.subject', '=', subject)
        .whereExists(function () {
          this.select('*')
            .from('class_schedule')
            .whereRaw('"class_schedule"."class_id" = "classes"."id"')
            .whereRaw('"class_schedule"."week_day" = ??', [Number(weekDay)])
            .whereRaw('"class_schedule"."from" <= ??', [timeInMinutes])
            .whereRaw('"class_schedule"."to" > ??', [timeInMinutes])
        })
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*'])

      return res.json(classes)
    } catch (error) {
      console.log(error)
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body

    const trx = await db.transaction()

    try {
      const insertedUsersIds = await trx('users')
        .insert({
          name,
          avatar,
          whatsapp,
          bio
        })
        .returning('*')
      const userId = insertedUsersIds[0].id

      const insertedClassesId = await trx('classes')
        .insert({
          subject,
          cost,
          user_id: userId
        })
        .returning('*')
      const classId = insertedClassesId[0].id

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => ({
        class_id: classId,
        week_day: scheduleItem.weekDay,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to)
      }))

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return res.status(201).send()
    } catch (err) {
      console.log(err)
      await trx.rollback()

      return res
        .status(400)
        .json({ error: 'Unexpected error while creating new class.' })
    }
  }
}
