import { inject, injectable } from 'tsyringe'

import { IConnectionRepository } from '@modules/connection/repositories/ConnectionRepository/IConnectionRepository'
import { IUseCase } from '@shared/protocols/IUseCase'

@injectable()
export class CreateConnectionsUseCase implements IUseCase {
  constructor(
    @inject('ConnectionRepository')
    private readonly connectionRepository: IConnectionRepository
  ) {}

  async execute(userId: number): Promise<void> {
    await this.connectionRepository.create(userId)
  }
}
