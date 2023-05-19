import { FastifyInstance } from 'fastify'

import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

import { createWriteStream } from 'node:fs'
import { randomUUID } from 'node:crypto'
import { extname, resolve } from 'node:path'

const pump = promisify(pipeline)

// Could be optimeze to use Storage Accounts
export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 20_971_520, // 20mb
      },
    })

    if (!upload) {
      return reply.status(400).send('No file attached')
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) {
      return reply
        .status(400)
        .send('Invalid format, use image or video file below 5mb')
    }

    console.log(upload.filename)

    const fileId = randomUUID()
    const extension = extname(upload.filename)

    const fileName = fileId.concat(extension)

    const writeStream = createWriteStream(
      resolve(__dirname, '..', '..', 'uploads', fileName),
    )

    await pump(upload.file, writeStream)

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

    return { fileUrl }
  })
}
