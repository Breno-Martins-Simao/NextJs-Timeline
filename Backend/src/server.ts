import 'dotenv/config'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'

const port = 3333
const app = fastify()

app.register(cors, {
  origin: true, // Change for Production url later
})

app.register(jwt, {
  secret: 'spacetime',
})
app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Http server running on http://localhost:${port}`)
  })
