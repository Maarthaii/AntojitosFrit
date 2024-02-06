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
router.post('/register', controller.addUser)
router.post('/logIn', controller.loginUser)
router.post('/carritoController', carritoController.addCarts)
router.get('/logout', function (req, res) {
  req.session.destroy()
  res.status(304).redirect('/')
})
module.exports = router
