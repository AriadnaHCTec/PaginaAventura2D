const Sequelize = require('sequelize');
//Traer el objeto sequelize
//const sequelize = require('../util/database');

const Jugador = (sequelize)=>{
    sequelize.define('jugador',{
        nombreUsuario:{
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true   
        },
        correo:{
            type: Sequelize.STRING(250),
            allowNull: false
        },
        contraseña:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        fechaDeNacimiento:{
            type: Sequelize.DATE,
            allowNull: false
        },
        genero:{
            type: Sequelize.STRING(1),
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
        fechaRegistro:{
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: new Date()
        },
        ultimaSesion:{
            type: Sequelize.DATE,
            allowNull: true
        },
        tiempoJuego:{
            type: Sequelize.TIME,
            allowNull: true
        },
        puntos:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        estadoJuego:{
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    })
};

module.exports = Jugador;