import { container } from 'tsyringe'

import { KnexConnectionRepository } from '@modules/connection/infra/knex/repositories/KnexConnectionRepository'
import { IConnectionRepository } from '@modules/connection/repositories/IConnectionRepository'

container.registerSingleton<IConnectionRepository>(
  'ConnectionRepository',
  KnexConnectionRepository
)
