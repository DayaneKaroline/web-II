const express = require("express");

const usuariosRoutes = require("./routes/usuarios");
const helloRoutes = require("./routes/hello");

const app = express();

// Middleware para  JSON
app.use(express.json());

//Rota de aplicação
app.use("/usuarios", usuariosRoutes);
app.use("/hello", helloRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;