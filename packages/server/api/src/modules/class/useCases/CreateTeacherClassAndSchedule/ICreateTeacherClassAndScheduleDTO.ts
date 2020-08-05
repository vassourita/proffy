import { ICreateClassDTO } from '@modules/class/repositories/ClassRepository/ICreateClassDTO'
import { ICreateScheduleDTO } from '@modules/class/repositories/ScheduleRepository/ICreateScheduleDTO'
import { ICreateUserDTO } from '@modules/class/repositories/UserRepository/ICreateUserDTO'

export interface ICreateTeacherClassAndScheduleDTO {
  schedule: ICreateScheduleDTO[]
  user: ICreateUserDTO
  class: Omit<ICreateClassDTO, 'userId'>
}
