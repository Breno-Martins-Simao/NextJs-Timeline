import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const port = 3333
const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Http server running on http://localhost:${port}`)
  })
