//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const Usuario = sequelize.models.UsuarioSteam;
const path = require('path');


exports.getInicioSesion = (req,res)=>{
    res.render('inicioSesionSteam.html',{
        error: 0
    });
}

exports.getError = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','errorSteam.html'));
}

exports.postIniciarSesion = (req,res)=>{
    console.log(req.body);
    Usuario.findByPk(req.body.nombreUsuario)
    .then(resultado=>{
        if(resultado){
            if(req.body.contraseñaUsuario == resultado.contraseña){
                res.sendFile(path.join(__dirname,'..','views','homeSteam.html'));
            }else{
                res.render('inicioSesionSteam.html',{
                    error: 1
                });
            }
        }else{
            res.render('inicioSesionSteam.html',{
                error: 2
            });
        }        
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
};