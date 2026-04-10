const { getConnection, sql } = require("../db");
const { get } = require("../routes/usuarios");

exports.getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Usuarios");

    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};


exports.postUsuario = async (req, res) => {
    try{
        const { nome, email } = req.body;

        const pool = await getConnection();
           await pool.request()
      .input("nome", sql.VarChar, nome)
      .input("email", sql.VarChar, email)
      .query(`
        INSERT INTO Usuarios (nome, email)
        VALUES (@nome, @email)
      `);
        
        res.status(201).json({ 
            sucesso: true,
            message: "Usuário criado com sucesso" 
        });
    } catch (error) {
        res.status(500).json({ erro: error.message });  
    
    }
};