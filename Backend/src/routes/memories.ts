import { FastifyInstance, FastifyRequest } from 'fastify'
import { prisma } from '../lib/prisma'
import { z as zod } from 'zod'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })

  app.get('/memories/:id', async (request: FastifyRequest) => {
    const paramsSchema = zod.object({
      id: zod.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  app.post('/memories', async (request: FastifyRequest) => {
    const bodySchema = zod.object({
      content: zod.string(),
      coverUrl: zod.string(),
      isPublic: zod.coerce.boolean().default(false),
    })

    const { content, isPublic, coverUrl } = bodySchema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: 'df04111a-d7f1-4c3d-8997-9ff531927744',
      },
    })

    return memory
  })

  app.put('/memories/:id', async (request: FastifyRequest) => {
    const paramsSchema = zod.object({
      id: zod.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = zod.object({
      content: zod.string(),
      coverUrl: zod.string(),
      isPublic: zod.coerce.boolean().default(false),
    })

    const { content, isPublic, coverUrl } = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

  app.delete('/memories/:id', async (request: FastifyRequest) => {
    const paramsSchema = zod.object({
      id: zod.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
