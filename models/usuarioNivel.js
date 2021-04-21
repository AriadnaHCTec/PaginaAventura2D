const Sequelize = require('sequelize');
//Traer el objeto sequelize
//const sequelize = require('../util/database');

const UsuarioNivel = (sequelize)=>{
    sequelize.define('usuarioNivel',{
        idUsuarioNivel:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        fechaInicio:{
            type: Sequelize.DATEONLY,
            allowNull: false,  
        },
        fechaFinal:{
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        vidas:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        preguntas:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        intentoPreguntas:{
            type: Sequelize.INTEGER,
            allowNull: true
        }
    })
};

module.exports = UsuarioNivel;