//Traer el modelo asociado a la tabla usuario
const Usuario = require('../models/usuario');
const path = require('path');

exports.getAgregarUsuario = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','registro.html'));
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
            //console.log(registros)
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

exports.postIniciarSesion = (req,res)=>{
    console.log(req.body);
    Usuario.findByPk(req.body.usuario)
    .then(resultado=>{
        if(resultado){
            if(req.body.contraseña == resultado.contraseña){
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