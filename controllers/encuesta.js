//Traer el modelo asociado a la tabla usuario
const Usuario = require("../util/database").models.Encuesta;
const path = require('path');

exports.postAgregarEncuesta = (req,res)=>{
    console.log(req.body);
    Usuario.create({
        nombreUsuario: req.body.nombreEncuesta,
        interesante: req.body.interesanteEncuesta,
        aprendio: req.body.aprendioEncuesta,
        profesion: req.body.profesionEncuesta,
        interesStem: req.body.interesStemEncuesta,
        UsuarioUsuario: req.body.nombreEncuesta
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error));

    res.redirect("/usuario/confirmacion");
};