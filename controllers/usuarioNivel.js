//Traer el modelo asociado a la tabla usuario
const Usuario = require("../util/database").models.usuarioNivel;

exports.postAgregarUsuarioNivel = (req,res)=>{
    console.log(req.body);
    Usuario.create({                      
      UsuarioUsuario: req.body.UsuarioUsuario,
      NivelNumNivel: req.body.NivelNumNivel,      
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error));

    res.redirect("/usuario/confirmacion");
};

exports.postActualizarNivel = (req,res)=>{
  console.log(req.body);
  Usuario.findByPk(req.query.UsuarioUsuario)
    .then(usuario=>{
    usuario.vidas=req.body.vidas,
    usuario.preguntas= req.body.preguntas,
    usuario.intentoPreguntas= req.body.intentoPreguntas,
    usuario.puntos=req.body.puntos,
    usuario.fechaFinal= req.body.fechaFinal
    return usuario && usuario.save();
    });
  res.redirect("/usuario/confirmacion");
};