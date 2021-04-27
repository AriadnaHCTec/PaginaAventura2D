//Traer el modelo asociado a la tabla usuario
const Sequelize = require('sequelize');
const sequelize = require("../util/database");
const Usuario = sequelize.models.UsuarioSteam;
const path = require('path');


exports.getInicioSesion = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','inicioSesionSteam.html'));
}

exports.postIniciarSesion = (req,res)=>{
    console.log(req.body);
    Usuario.findByPk(req.body.nombreUsuario)
    .then(resultado=>{
        if(resultado){
            if(req.body.contraseñaUsuario == resultado.contraseña){
                res.sendFile(path.join(__dirname,'..','views','homeSteam.html'));
                //res.send("osi");
            }else{
                //res.send("incorrecto");
            }
        }else{
            //res.send("no existe el usuario");
        }        
    })
    .catch(error=>{
        console.log(error);
        res.send(error);
    })
};