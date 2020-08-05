import { Response, Request } from 'express'
import { injectable, container } from 'tsyringe'

import { CreateTeacherClassAndScheduleUseCase } from '@modules/class/useCases/CreateTeacherClassAndSchedule/CreateTeacherClassAndScheduleUseCase'
import { FindAvailableTeachersUseCase } from '@modules/class/useCases/FindAvailableTeachers/FindAvailableTeachersUseCase'
import { IRestController } from '@shared/infra/http/protocols/IRestController'
import convertHourToMinutes from '@shared/utils/convertHourToMinutes'

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

    const createTeacherClassAndSchedule = container.resolve(
      CreateTeacherClassAndScheduleUseCase
    )
    await createTeacherClassAndSchedule.execute({
      user: {
        avatar,
        bio,
        name,
        whatsapp
      },
      class: {
        cost,
        subject
      },
      schedule: schedule.map(scheduleItem => ({
        weekDay: scheduleItem.weekDay,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to)
      }))
    })
    return res.status(201).send()
  }
}
