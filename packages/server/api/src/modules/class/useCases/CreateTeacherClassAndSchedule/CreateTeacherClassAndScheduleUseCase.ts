import { inject, injectable } from 'tsyringe'

import { IClassRepository } from '@modules/class/repositories/ClassRepository/IClassRepository'
import { IScheduleRepository } from '@modules/class/repositories/ScheduleRepository/IScheduleRepository'
import { IUserRepository } from '@modules/class/repositories/UserRepository/IUserRepository'
import { IUseCase } from '@shared/protocols/IUseCase'

import { ICreateTeacherClassAndScheduleDTO } from './ICreateTeacherClassAndScheduleDTO'

@injectable()
export class CreateTeacherClassAndScheduleUseCase implements IUseCase {
  constructor(
    @inject('ClassRepository')
    private readonly classRepository: IClassRepository,
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
    @inject('ScheduleRepository')
    private readonly scheduleRepository: IScheduleRepository
  ) {}

  async execute(data: ICreateTeacherClassAndScheduleDTO): Promise<void> {
    const userId = await this.userRepository.create(data.user)

    const classId = await this.classRepository.create({
      ...data.class,
      userId
    })

    await this.scheduleRepository.createMany(
      data.schedule.map(d => ({
        ...d,
        classId
      }))
    )
  }
}
