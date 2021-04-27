const Sequelize = require('sequelize');

const UsuarioNivel = (sequelize)=>{
    sequelize.define('usuarioNivel',{
        idUsuarioNivel:{
            type: Sequelize.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        fechaInicio:{
            type: Sequelize.DATEONLY,
            defaultValue: new Date(),
            allowNull: true,  
        },
        fechaFinal:{
            type: Sequelize.DATEONLY,            
            allowNull: true
        },
        vidas:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        preguntas:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        intentoPreguntas:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0
        },
        puntos:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        }
    })
};

module.exports = UsuarioNivel;