const Sequelize = require('sequelize');
//Traer el objeto sequelize
const sequelize = require('../util/database');

const InicioSesion = sequelize.define('Sesion',{
    idJugador:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true   
    },
    idLogro:{
        type: Sequelize.INTEGER,
        allowNull: false
        //abajo se pone un codigo para que sea llave foranea
    },
    nombreUsuario:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    fechaRegistro:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: new Date()
    },
    correo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    contraseña:{
        type: Sequelize.STRING,
        allowNull: false
    },
    genero:{
        type: Sequelize.STRING(1),
        allowNull: false
    },
    fechaDeNacimiento:{
        type: Sequelize.DATE,
        allowNull: false
    },
    profesion:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    estado:{
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = InicioSesion;