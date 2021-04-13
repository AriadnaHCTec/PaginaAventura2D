const Sequelize = require('sequelize');
//Traer el objeto sequelize
const sequelize = require('../util/database');

const Usuario = sequelize.define('Usuario',{
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
    idLogro:{
        type: Sequelize.INTEGER,
        allowNull: true
        //abajo se pone un codigo para que sea llave foranea
    },    
    fechaRegistro:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: new Date()
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
        allowNull: true
    }

});

module.exports = Usuario;