import { container } from 'tsyringe'

import { KnexClassRepository } from '@modules/class/infra/knex/repositories/ClassRepository/KnexClassRepository'
import { KnexScheduleRepository } from '@modules/class/infra/knex/repositories/ScheduleRepository/KnexScheduleRepository'
import { KnexUserRepository } from '@modules/class/infra/knex/repositories/UserRepository/KnexUserRepository'
import { IClassRepository } from '@modules/class/repositories/ClassRepository/IClassRepository'
import { IScheduleRepository } from '@modules/class/repositories/ScheduleRepository/IScheduleRepository'
import { IUserRepository } from '@modules/class/repositories/UserRepository/IUserRepository'
import { KnexConnectionRepository } from '@modules/connection/infra/knex/repositories/ConnectionRepository/KnexConnectionRepository'
import { IConnectionRepository } from '@modules/connection/repositories/IConnectionRepository'

container.registerSingleton<IConnectionRepository>(
  'ConnectionRepository',
  KnexConnectionRepository
)

container.registerSingleton<IClassRepository>(
  'ClassRepository',
  KnexClassRepository
)

container.registerSingleton<IScheduleRepository>(
  'ScheduleRepository',
  KnexScheduleRepository
)

container.registerSingleton<IUserRepository>(
  'UserRepository',
  KnexUserRepository
)
