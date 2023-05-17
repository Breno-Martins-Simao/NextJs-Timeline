import axios from 'axios'
import { FastifyInstance } from 'fastify'
import { z as zod } from 'zod'
import { prisma } from '../lib/prisma'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = zod.object({
      code: zod.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const accessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { access_token } = accessTokenResponse.data

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `bearer ${access_token}`,
      },
    })

    const userSchema = zod.object({
      id: zod.number(),
      login: zod.string(),
      name: zod.string(),
      avatar_url: zod.string().url(),
    })

    const userInfo = userSchema.parse(userResponse.data)

    let user = await prisma.user.findUnique({
      where: {
        gitHubId: userInfo.id,
      },
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          gitHubId: userInfo.id,
          login: userInfo.login,
          name: userInfo.name,
          avatarUrl: userInfo.avatar_url,
        },
      })
    }

    return {
      user,
    }
  })
}
