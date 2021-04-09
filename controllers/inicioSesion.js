//Traer el modelo asociado a la tabla usuario
const InicioSesion = require('../models/inicioSesion');
const path = require('path');

exports.postAgregarInicioSesion = (req,res)=>{
    console.log(req.body);
    InicioSesion.create({
        usuario: req.body.usuarioInicioSesion,
        horaInicio: req.body.horaInicioInicioSesion,
        horaFinal: req.body.horaFinalInicioSesion
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error));
}
