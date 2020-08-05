import { inject } from 'tsyringe'

import { IConnectionRepository } from '@modules/connection/repositories/IConnectionRepository'
import { IUseCase } from '@shared/protocols/IUseCase'

export class CreateConnectionsUseCase implements IUseCase {
  constructor(
    @inject('ConnectionRepository')
    private readonly connectionRepository: IConnectionRepository
  ) {}

  async execute(userId: number): Promise<void> {
    await this.connectionRepository.create(userId)
  }
}
