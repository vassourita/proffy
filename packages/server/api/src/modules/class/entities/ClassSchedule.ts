export class ClassSchedule {
  id: number
  weekDay: number
  from: number | string
  to: number | string
  classId: number

  constructor(data: Partial<ClassSchedule>) {
    Object.assign(this, data)
  }
}
