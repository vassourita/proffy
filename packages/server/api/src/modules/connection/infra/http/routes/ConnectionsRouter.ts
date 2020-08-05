import express from 'express'
import { inject, injectable } from 'tsyringe'

import { IRouter } from '@shared/infra/http/protocols/IRouter'

import { ConnectionsController } from '../controllers/ConnectionsController'

@injectable()
export class ConnectionsRouter implements IRouter {
  public routes: express.Router

  constructor(
    @inject('ConnectionsController')
    private readonly connectionsController: ConnectionsController
  ) {
    this.routes = express.Router()

    this.routes.get('/', connectionsController.index)
    this.routes.post('/', connectionsController.store)
  }
}
