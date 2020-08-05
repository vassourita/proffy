import { container } from 'tsyringe'

import { ClassesRouter } from '@modules/class/infra/http/routes/ClassesRouter'
import { ConnectionsRouter } from '@modules/connection/infra/http/routes/ConnectionsRouter'
import { MainRouter } from '@shared/infra/http/routes/MainRouter'

container.registerSingleton<ClassesRouter>('ClassesRouter', ClassesRouter)

container.registerSingleton<ConnectionsRouter>(
  'ConnectionsRouter',
  ConnectionsRouter
)

container.registerSingleton<MainRouter>('MainRouter', MainRouter)
