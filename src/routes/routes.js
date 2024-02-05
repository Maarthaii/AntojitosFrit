const express = require('express')

const router = express.Router()

const Controller = require('../controllers/user')
const controller = new Controller()
const CarritoController = require('../controllers/cart')
const carritoController = new CarritoController()

router.get('/', controller.renderHome)
router.get('/store', controller.renderStore)
router.get('/logIn', controller.renderLogIn)
router.get('/register', controller.renderRegister)
router.get('/userView', controller.renderUserView)
// router.get('/logout', controller.renderLogout)
router.post('/register', controller.addUser)
router.post('/logIn', controller.loginUser)
router.post('/carritoController', carritoController.addCarts)
router.get('/logout', function (req, res) {
  req.session.destroy()
  res.status(304).redirect('/')
})
// router.post('/cerrar', (req, res) => {
//     // Eliminar el identificador de usuario de la sesión
//     req.session.destroy(err => {
//         if (err) {
//             console.error('Error al cerrar la sesión:', err);
//             res.status(500).json({ error: 'Error al cerrar la sesión' });
//         } else {

//             res.json({ mensaje: 'Sesión cerrada exitosamente' });
//         }
//     });
// });

module.exports = router
