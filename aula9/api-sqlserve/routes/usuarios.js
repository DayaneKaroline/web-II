const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuariosController");
const postUsuario = require("../controllers/usuariosController").postUsuario;

router.get("/", controller.getUsuarios);
router.post("/", controller.postUsuario);

module.exports = router;
