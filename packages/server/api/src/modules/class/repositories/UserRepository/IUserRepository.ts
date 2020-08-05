import { ICreateUserDTO } from './ICreateClassDTO'

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<number>
}
