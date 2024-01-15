const express = require('express');

const router = express.Router();

const Controller = require('../controllers/controllers');
const controller = new Controller();

router.get('/', controller.renderHome);
router.get('/catalogo', controller.renderCatalogo);
router.get('/iniciar_sesion', controller.renderIniciarSesion);
router.get('/registro', controller.renderRegistro);
router.get('/vista_usuario', controller.renderVistaUsuario);

module.exports = router;