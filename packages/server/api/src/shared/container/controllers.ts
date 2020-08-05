import { container } from 'tsyringe'

import { ClassesController } from '@modules/class/infra/http/controllers/ClassesController'
import { ConnectionsController } from '@modules/connection/infra/http/controllers/ConnectionsController'

container.registerSingleton<ClassesController>(
  'ClassesController',
  ClassesController
)

container.registerSingleton<ConnectionsController>(
  'ConnectionsController',
  ConnectionsController
)
