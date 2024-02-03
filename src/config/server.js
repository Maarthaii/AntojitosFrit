const express = require('express')
const path = require('path')
const router = require('../routes/routes')
const session = require('express-session');

const server = express()

// server.use(session({
//     secret: 'mi_secreto',
//     resave: false,
//     saveUninitialized: true
// }));

server.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`)
  next()
})

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

server.set('views', path.join(__dirname, '../views'))
server.set('view engine', 'pug')

server.use('/', router)

module.exports = server
