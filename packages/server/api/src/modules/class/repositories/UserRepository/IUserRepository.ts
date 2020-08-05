import { ICreateUserDTO } from './ICreateUserDTO'

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<number>
}
