import { ICreateScheduleDTO } from './ICreateScheduleDTO'

export interface IScheduleRepository {
  createMany(data: ICreateScheduleDTO[]): Promise<number[]>
}
