const Sequelize = require('sequelize');
//Traer el objeto sequelize
//const sequelize = require('../util/database');

const JugadorNivel = (sequelize)=>{
    sequelize.define('jugadorNivel',{
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

module.exports = JugadorNivel;