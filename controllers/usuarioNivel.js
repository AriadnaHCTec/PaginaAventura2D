//Traer el modelo asociado a la tabla usuario
const Usuario = require('../models/usuarioNivel');
const path = require('path');

exports.postAgregarUsuarioNivel = (req,res)=>{
    console.log(req.body);
    Usuario.create({
        fechaInicio: req.body.fechaInicioNivel                      
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error));

    res.redirect("/usuario/confirmacion");
};