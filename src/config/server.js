const express = require('express') // Un framework que maneja las peticiones.
const path = require('path') // Gestiona las rutas de forma segura
const router = require('../routes/routes') // Define las rutas de la aplicacion
const session = require('express-session') // es una biblioteca para manejar las sesiones express.

const server = express() // configuracion del archivo express
// configuracion de la sesion
server.use(session({ // Se usa para gestionar las sesiones de la aplicacion
  secret: 'cookie_antojitosF', // es una clave secreta que se utiliza para firmar el ID
  resave: true, // Cuando esta en true, la sesion se guarda en cada solicitus incluso si no se ha modificado.
  saveUninitialized: true // Establecido en true, significa que se guardarán sesiones aún si no han sido modificadas.
}))
// middleware para registrar solicitudes
server.use((req, res, next) => { // este imprime en consola cada solicitud recibida
  console.log(`Solicitud recibida: ${req.method} ${req.url}`)
  next()
})
// cerrar la sesion.
server.get('/session/destroy', function (req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.log('Ha ocurrido un error al iniciar sesion ', err)
      res.status(500).send('Error al cerrar sesion')
    } else {
      res.redirect('/')
    }
  })
})
// para servir los archivos estaticos
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
// definicion de las vistas
server.set('views', path.join(__dirname, '../views'))
server.set('view engine', 'pug')
// configuracion de las rutas.
server.use('/', router)
// exporta la instacia del server, donde se usara en el archivo index.js
module.exports = server
