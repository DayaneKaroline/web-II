const express= require('express');
const router= express.Router();
const validarUsuario = require('../controllers/usuarioController');
const { validarUsuario } = require('../controllers/usuarioControllers');

router.post('/', validarUsuario.listarUsuarios);

module.exports= router;