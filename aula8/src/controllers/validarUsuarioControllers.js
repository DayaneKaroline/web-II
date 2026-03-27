const validarUsuario = (req, res, next) => {
    const { nome, email, idade } = req.body;
    const erros = [];

    //validação do nome 
    if(!nome){
        return res.status(400).json({
            success: false,
            error: "Nome é obrigatório"
        });
    }

    //validação do email
    if(!email || !email.includes('@')){
        return res.status(400).json({
            success: false,
            error: "Email inválido"
        });
    }

    //validação da idade
    if(!idade || idade >= 18){
        return res.status(400).json({
            success: false,
            error: "Idade inválida"
        });
    }
    // Se tudo estiver correto 
    return res.status(200).json({
        success: true,
        message: "Usuário válido",
        data: {nome, email, idade}
    });


};