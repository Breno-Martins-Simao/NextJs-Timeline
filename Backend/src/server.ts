import fastify from 'fastify'

const port = 3333
const app = fastify()

app.listen({
    port: port
}).then(() => {
    console.log(`Http server running on http://localhost:${port}`)
})