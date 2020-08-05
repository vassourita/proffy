import { db } from '@shared/infra/knex/connection'
import convertHourToMinutes from '@shared/utils/convertHourToMinutes'

import { KnexClassRepository } from './KnexClassRepository'

describe('KnexClassRepository', () => {
  const repository = new KnexClassRepository()

  beforeAll(async () => {
    await db.migrate.latest()

    const users = [
      {
        name: 'John Doe',
        subject: 'Mathematics'
      },
      {
        name: 'John Troe',
        subject: 'Geography'
      },
      {
        name: 'John Qua',
        subject: 'English'
      },
      {
        name: 'John Fif',
        subject: 'Mathematics'
      }
    ]
    for (let i = 0; i < users.length; i++) {
      const insertedUsersIds = await db('users').insert({
        name: users[i].name,
        avatar: '',
        whatsapp: '',
        bio: ''
      })
      const userId = insertedUsersIds[0]

      const insertedClassesId = await db('classes').insert({
        subject: users[i].subject,
        cost: 20,
        user_id: userId
      })
      const classId = insertedClassesId[0]

      const classSchedule = [1, 4, 7].map(idx => ({
        class_id: classId,
        week_day: idx,
        from: convertHourToMinutes('08:00'),
        to: convertHourToMinutes('18:00')
      }))

      await db('class_schedule').insert(classSchedule)
    }
  })

  it('should find teachers by subject', async () => {
    let teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('10:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(2)

    teachers = await repository.findByDateAndSubject({
      subject: 'Unknown',
      hour: convertHourToMinutes('10:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(0)

    teachers = await repository.findByDateAndSubject({
      subject: 'Geography',
      hour: convertHourToMinutes('10:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(1)
  })

  it('should find teachers by week day', async () => {
    let teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('10:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(2)

    teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('10:00'),
      weekDay: 7
    })
    expect(teachers.length).toEqual(2)

    teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('10:00'),
      weekDay: 3
    })
    expect(teachers.length).toEqual(0)
  })

  it('should find teachers by hour', async () => {
    let teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('09:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(2)

    teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('07:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(0)

    teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('17:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(2)

    teachers = await repository.findByDateAndSubject({
      subject: 'Mathematics',
      hour: convertHourToMinutes('19:00'),
      weekDay: 1
    })
    expect(teachers.length).toEqual(0)
  })
})
