const Sequelize = require('sequelize');

const UsuarioNivel = (sequelize)=>{
    sequelize.define('usuarioNivel',{
        idUsuarioNivel:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
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