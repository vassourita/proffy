import { Request, Response } from 'express'
import { injectable, container } from 'tsyringe'

import { CountConnectionsUseCase } from '@modules/connection/useCases/CountConnections/CountConnectionsUseCase'
import { CreateConnectionsUseCase } from '@modules/connection/useCases/CreateConnections/CreateConnectionsUseCase'
import { IRestController } from '@shared/infra/http/protocols/IRestController'

@injectable()
export class ConnectionsController implements IRestController {
  async index(req: Request, res: Response): Promise<Response> {
    const countConnections = container.resolve(CountConnectionsUseCase)
    const total = await countConnections.execute()

    return res.json({ total })
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body

    const createConnection = container.resolve(CreateConnectionsUseCase)
    await createConnection.execute(userId)

    return res.status(201).send()
  }
}
