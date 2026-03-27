const express = require('express');
const router = express.Router();
const validarUsuarioControllers = require('./src/controllers/validarUsuarioControllers');

router.post('/', validarUsuarioControllers.validarUsuario);

module.exports = router;