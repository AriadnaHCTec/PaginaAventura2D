const Sequelize = require('sequelize');

const UsuarioSteam = (sequelize)=>{
    sequelize.define('UsuarioSteam',{
        usuario:{
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true   
        },
        contraseña:{
            type: Sequelize.STRING,
            allowNull: false
        }            
    })  
};

module.exports = UsuarioSteam;