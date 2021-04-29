//Traer el modelo asociado a la tabla usuario
//const Usuario = require('../models/usuario');
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const Usuario = sequelize.models.Usuario;
const path = require('path');

exports.getHome = (req,res)=>{    
    res.sendFile(path.join(__dirname,'..','views','home.html'));
}

exports.getAgregarUsuario = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','registro.html'));
}

exports.getAgregarEncuesta = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','registroFinal.html'));
}

exports.getInicioSesion = (req,res)=>{
    //res.sendFile(path.join(__dirname,'..','views','inicioSesion.html'));
    res.render('inicioSesion.html',{
        error: 0
    });
}

exports.getError = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','error.html'));
}


exports.postAgregarUsuario = (req,res)=>{
    console.log(req.body);
    Usuario.create({
        usuario: req.body.nombreUsuario,
        contraseña: req.body.contraseñaUsuario,
        correo: req.body.correoUsuario,
        genero: req.body.generoUsuario,
        fechaDeNacimiento: req.body.fechaDeNacimientoUsuario,
        profesion: req.body.profesionUsuario,
        estado: req.body.estadoUsuario
    }).then(resultado=>console.log("Registro exitoso"))
      .catch(error=>console.log(error));

    res.redirect("/usuario/confirmacion");
};

exports.getConfirmacion = (req,res)=>{
    //res.send("Registro exitoso");
    res.sendFile(path.join(__dirname,'..','views','confirmacion.html'));
};

exports.getRegistros = (req,res)=>{
    //Simular consulta
    //query
    //SELECT * from usuario;
    Usuario.findAll()
        .then(registros=>{           
            var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            res.render('DataTable.html',{
                personas:data,
                sesion:"Autorizado",
                hora:"14:00"
            });
        })    
};


exports.getHomeSteam = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','homeSteam.html')); 
}

exports.postIniciarSesion = (req,res)=>{
    console.log(req.body);
    Usuario.findByPk(req.body.nombreUsuario)
    .then(resultado=>{
        if(resultado){
            if(req.body.contraseñaUsuario == resultado.contraseña){
                res.send("osiosi");
            }else{
                res.send("incorrecto");
            }
        }else{
            res.send("no existe el usuario");
        }        
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
};


exports.postIniciarSesionPagina = (req,res)=>{
    console.log(req.body);
    Usuario.findByPk(req.body.nombreUsuario)
    .then(resultado=>{
        if(resultado){
            if(req.body.contraseñaUsuario == resultado.contraseña){                
                Usuario.findByPk(req.body.nombreUsuario)
                .then(resultado=>{
                    var data=[];
                    data.push(resultado.dataValues);
                    res.render('DataTable.html',{
                        personas:data,
                        sesion:"Autorizado",
                        hora:"14:00"
                    });
                })
                .catch(error=>{
                    console.log(error);
                    res.send(error);
                })
            }else{
                res.render('inicioSesion.html',{
                    error: 1
                });
            }
        }else{
            res.render('inicioSesion.html',{
                error: 2
            });
        }        
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
};

exports.getRegistro = (req,res) =>{
    console.log(req.params);
    Usuario.findByPk(req.params.usuario)
    .then(resultado=>{
        var data=[];
        data.push(resultado.dataValues);
        res.render('DataTable.html',{
            personas:data,
            sesion:"Autorizado",
            hora:"14:00"
        });
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
}

exports.postUsuarioTermino = (req,res)=>{
    console.log(req.body);
    Usuario.findByPk(req.body.nombreUsuario)
      .then(usuario=>{    
      usuario.estadoJuego = true
      return usuario && usuario.save();
      });
    res.redirect("/usuario/confirmacion");
  };

