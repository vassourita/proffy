import 'dotenv/config'
import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import morgan from 'morgan'
import { container } from 'tsyringe'

import '../../container'

import { MainRouter } from './routes/MainRouter'

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

app.use(container.resolve(MainRouter).routes)

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`> Running on port ${port}`))
