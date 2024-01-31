const express = require('express');

const router = express.Router();

const Controller = require('../controllers/controllers');
const controller = new Controller();
const CarritoController = require('../controllers/carritoController');
const carritoController = new CarritoController();

router.get('/', controller.renderHome);
router.get('/catalogo', controller.renderCatalogo);
router.get('/iniciar_sesion', controller.renderIniciarSesion);
router.get('/registro', controller.renderRegistro);
router.get('/vista_usuario', controller.renderVistaUsuario);
router.post('/registro', controller.addUser);
router.post('/iniciar_sesion', controller.loginUser);
router.post('/catalogo', carritoController.addCarts)

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


module.exports = router;