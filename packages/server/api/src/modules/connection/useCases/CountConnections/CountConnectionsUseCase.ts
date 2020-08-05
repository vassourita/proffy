import { inject } from 'tsyringe'

import { IConnectionRepository } from '@modules/connection/repositories/IConnectionRepository'
import { UseCase } from '@shared/protocols/UseCase'

export class CountConnectionsUseCase implements UseCase {
  constructor(
    @inject('ConnectionRepository')
    private readonly connectionRepository: IConnectionRepository
  ) {}

  execute(): Promise<number> {
    return this.connectionRepository.count()
  }
}
