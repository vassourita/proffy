import express from 'express'
import { inject, injectable } from 'tsyringe'

import { ClassesRouter } from '@modules/class/infra/http/routes/ClassesRouter'
import { ConnectionsRouter } from '@modules/connection/infra/http/routes/ConnectionsRouter'

import { IRouter } from '../protocols/IRouter'

@injectable()
export class MainRouter implements IRouter {
  public routes: express.Router

  constructor(
    @inject('ClassesRouter')
    private readonly classesRouter: ClassesRouter,
    @inject('ConnectionsRouter')
    private readonly connectionsRouter: ConnectionsRouter
  ) {
    this.routes = express.Router()

    this.routes.use('/classes', classesRouter.routes)
    this.routes.use('/connections', connectionsRouter.routes)
  }
}
