const express = require('express') // framewor usado para crear rutas

const router = express.Router() // se inicializa con express.Router() lo que permite definir un conjunto de rutas

// importacion de controladores del usuario y del carrito
const Controller = require('../controllers/user')
const controller = new Controller()
const CarritoController = require('../controllers/cart')
const carritoController = new CarritoController()

router.get('/', controller.renderHome)
router.get('/store', controller.renderStore)
router.get('/logIn', controller.renderLogIn)
router.get('/register', controller.renderRegister)
router.get('/userView', controller.renderUserView)
// rutas post para registro e inicio de sesion
router.post('/register', controller.addUser)
router.post('/logIn', controller.loginUser)
router.post('/carritoController', carritoController.addCarts)
router.get('/logout', function (req, res) {
  req.session.destroy()
  res.status(304).redirect('/')
})
module.exports = router

/**
 * Resumen del flujo de las rutas:
Cuando el usuario accede a la URL raíz (/), se muestra la página de inicio de la aplicación.
Para ver la tienda de productos, el usuario va a /store.
Si el usuario quiere registrarse, va a /register, y si quiere iniciar sesión, va a /logIn.
Si el usuario ya está autenticado, puede ver su perfil en /userView.
Las rutas POST en /register y /logIn gestionan el registro e inicio de sesión respectivamente.
El carrito de compras se gestiona mediante la ruta /carritoController, que añade productos al carrito.
Para cerrar sesión, el usuario puede ir a /logout.
 */
