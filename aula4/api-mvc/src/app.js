const express = require("express");

const app = express();

//Premite receber JSON no body (POST/PUT)
app.use(express.json());

//Rotas (Módulos)
const alunosRoutes = require("./routes/alunosRoutes");
const produtosRouters = require("./routers/produtosRoutes");

//Prefixo para as rotas
app.use("/alunos", alunosRoutes);
app.use("/produtos", produtosRoutes);

//Rotas de teste/boas-vindas
app.get("/", (req, res) => {
    res.send("API MVC funcionando!");
});

module.exports = app;