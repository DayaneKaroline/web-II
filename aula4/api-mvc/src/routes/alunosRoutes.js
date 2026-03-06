const router = require("express").Router();
const alunosController = require("../controller/alunosController");

//GET http://localhost:3000/alunos
router.get("/", alunosController.listar);

//POST http://localhost:3000/alunos
router.post("/", alunosController.criar);

module.exports = router;