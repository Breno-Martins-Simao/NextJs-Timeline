import 'dotenv/config'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'

import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const port = 3333
const app = fastify()

app.register(cors, {
  origin: true, // Change for Production url later
})

app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(multipart) // File Stream

app.register(jwt, {
  secret: 'spacetime',
}) // JWT usage

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`Http server running on http://localhost:${port}`)
  })
