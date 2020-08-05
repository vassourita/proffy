import { inject } from 'tsyringe'

import { IConnectionRepository } from '@modules/connection/repositories/IConnectionRepository'
import { IUseCase } from '@shared/protocols/IUseCase'

export class CountConnectionsUseCase implements IUseCase {
  constructor(
    @inject('ConnectionRepository')
    private readonly connectionRepository: IConnectionRepository
  ) {}

  execute(): Promise<number> {
    return this.connectionRepository.count()
  }
}