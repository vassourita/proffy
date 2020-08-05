import { Request, Response } from 'express'

import db from '../database/connection'

export default class ConnectionsController {
  async index(req: Request, res: Response): Promise<Response> {
    const totalConnections = await db('connections').count('* as total')

    const { total } = totalConnections[0]

    return res.json({ total })
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body

    await db('connections').insert({
      user_id: userId
    })

    return res.status(201).send()
  }
}
