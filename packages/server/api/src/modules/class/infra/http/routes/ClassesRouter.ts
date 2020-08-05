import express from 'express'
import { inject, injectable } from 'tsyringe'

import { ClassesController } from '@modules/class/infra/http/controllers/ClassesController'
import { IRouter } from '@shared/infra/http/protocols/IRouter'

@injectable()
export class ClassesRouter implements IRouter {
  public routes: express.Router

  constructor(
    @inject('ClassesController')
    private readonly classesController: ClassesController
  ) {
    this.routes = express.Router()

    this.routes.get('/', classesController.index)
    this.routes.post('/', classesController.store)
  }
}
