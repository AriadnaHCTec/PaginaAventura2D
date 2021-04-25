//Traer el modelo asociado a la tabla usuario
const Usuario = require("../util/database").models.usuarioNivel;

exports.postAgregarUsuarioNivel = (req,res)=>{
    console.log(req.body);
    Usuario.create({
        idUsuarioNivel: req.body.idUsuarioNivel,                       
        UsuarioUsuario: req.body.UsuarioUsuario,
        NivelNumNivel: req.body.NivelNumNivel,
        vidas: req.body.vidas,
        preguntas: req.body.preguntas,
        intentoPreguntas: req.body.intentoPreguntas,
        puntos: req.body.puntos,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal

    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error));

    res.redirect("/usuario/confirmacion");
};