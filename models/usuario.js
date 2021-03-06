const Sequelize = require('sequelize');

const Usuario = (sequelize)=>{
    sequelize.define('Usuario',{
        usuario:{
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true   
        },
        contraseña:{
            type: Sequelize.STRING,
            allowNull: false
        },
        correo:{
            type: Sequelize.STRING,
            allowNull: false
        },    
        fechaRegistro:{
            type: Sequelize.DATEONLY,
            allowNull: true,
            defaultValue: new Date()
        },
        genero:{
            type: Sequelize.STRING(1),
            allowNull: false
        },
        fechaDeNacimiento:{
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        profesion:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        estado:{
            type: Sequelize.STRING,
            allowNull: true
        },
        estadoJuego:{
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    
    })  
};

module.exports = Usuario;