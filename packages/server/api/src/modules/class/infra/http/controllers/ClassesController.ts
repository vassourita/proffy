import { Response, Request } from 'express'
import { injectable, container } from 'tsyringe'

import { FindAvailableTeachersUseCase } from '@modules/class/useCases/FindAvailableTeachers/FindAvailableTeachersUseCase'
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

    const findAvailableTeachers = container.resolve(
      FindAvailableTeachersUseCase
    )
    const classes = await findAvailableTeachers.execute({
      hour: timeInMinutes,
      subject,
      weekDay: Number(weekDay)
    })

    return res.json(classes)
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
