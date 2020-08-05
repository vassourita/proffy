import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import { container } from 'tsyringe'

import '../../container'

import { MainRouter } from './routes/MainRouter'

const app = express()

app.use(express.json())

app.use(container.resolve(MainRouter).routes)

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`> Running on port ${port}`))
