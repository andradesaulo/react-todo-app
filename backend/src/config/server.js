// define a porta do servidor HTTP
const port = 3003
// cria uma instância de body-parse
const bodyParser = require('body-parser')
// cria uma instância do express
const express = require('express')
// cria um servidor HTTP express
const server = express()
// cria instância do arquivo cors
const alloCors = require('./cors')
// configura servidor para obter dados do formulário do usuário
server.use(bodyParser.urlencoded({ extended: true}))
// configura servidor para dados chegarem no formato JSON
server.use(bodyParser.json())
//configura o servidor para usar cors
server.use(alloCors)
// sobe o servidor
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server