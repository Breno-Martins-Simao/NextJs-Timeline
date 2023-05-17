import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const port = 3333
const app = fastify()

app.register(cors, {
  origin: true, // Change for Production url later
})
app.register(memoriesRoutes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Http server running on http://localhost:${port}`)
  })
