const express = require('express');

const router = express.Router();

const Controller = require('../controllers/controllers');
const controller = new Controller();

router.get('/', controller.renderHome);
router.get('/catalogo', controller.renderCatalogo);

module.exports = router;