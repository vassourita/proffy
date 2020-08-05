import express from 'express'
import { inject } from 'tsyringe'

import { ClassesController } from '@modules/class/infra/http/controllers/ClassesController'
import { ConnectionsController } from '@modules/connection/infra/http/controllers/ConnectionsController'

import { IRouter } from '../protocols/IRouter'

export class MainRouter implements IRouter {
  public routes: express.Router

  constructor(
    @inject('ClassesController')
    private readonly classesController: ClassesController,
    @inject('ConnectionsController')
    private readonly connectionsController: ConnectionsController
  ) {
    this.routes = express.Router()

    this.routes.get('/classes', classesController.index)
    this.routes.post('/classes', classesController.store)

    this.routes.get('/connections', connectionsController.index)
    this.routes.post('/connections', connectionsController.store)
  }
}
