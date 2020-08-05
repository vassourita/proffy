import { inject, injectable } from 'tsyringe'

import { ClassWithUser } from '@modules/class/entities/ClassWithUser'
import { IClassRepository } from '@modules/class/repositories/ClassRepository/IClassRepository'
import { IUseCase } from '@shared/protocols/IUseCase'

import { IFindAvailableTeacherDTO } from './IFindAvailableTeacherDTO'

@injectable()
export class FindAvailableTeachersUseCase implements IUseCase {
  constructor(
    @inject('ClassRepository')
    private readonly classRepository: IClassRepository
  ) {}

  execute(data: IFindAvailableTeacherDTO): Promise<ClassWithUser[]> {
    return this.classRepository.findByDateAndSubject(data)
  }
}
