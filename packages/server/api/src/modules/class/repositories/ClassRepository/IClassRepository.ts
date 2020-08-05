import { ClassWithUser } from '@modules/class/entities/ClassWithUser'

import { ICreateClassDTO } from './ICreateClassDTO'
import { IFindClassByDateAndSubjectDTO } from './IFindClassByDateAndSubjectDTO'

export interface IClassRepository {
  findByDateAndSubject(
    data: IFindClassByDateAndSubjectDTO
  ): Promise<ClassWithUser[]>

  create(data: ICreateClassDTO): Promise<number>
}
