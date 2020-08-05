import { Request, Response } from 'express'
import { injectable } from 'tsyringe'

import { IRestController } from '@shared/infra/http/protocols/IRestController'
import db from '@shared/infra/knex/connection'

@injectable()
export class ConnectionsController implements IRestController {
  async index(req: Request, res: Response): Promise<Response> {
    const totalConnections = await db('connections').count('* as total')

    const { total } = totalConnections[0]

    return res.json({ total })
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body

    await db('connections').insert({
      user_id: userId
    })

    return res.status(201).send()
  }
}
