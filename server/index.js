const express = require('express')
const mc = require('./controllers/messages-controller')

const app = express()

app.use(express.json())
app.use(express.static('node-2-afternoon' + '/../public/build'))

const messagesBaseUrl = '/api/messages'
app.post(messagesBaseUrl, mc.create)
app.get(messagesBaseUrl, mc.read)
app.put(`${messagesBaseUrl}/:id`, mc.update)
app.delete(`${messagesBaseUrl}/:id`, mc.delete)

const port = 3001
app.listen(port, () => {
    console.log(`Server listening on port ${port} `)
})

