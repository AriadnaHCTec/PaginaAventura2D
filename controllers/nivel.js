//Traer el modelo asociado a la tabla usuario
const Usuario = require("../util/database").models.Nivel;
const path = require('path');

exports.postAgregarNivel = (req,res)=>{
    console.log(req.body);
    Usuario.create({
        numNivel: req.body.numNivelNivel,
        tema: req.body.temaNivel        
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error));

    res.redirect("/usuario/confirmacion");
};