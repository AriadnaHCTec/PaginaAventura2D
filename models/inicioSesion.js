const Sequelize = require('sequelize');
//Traer el objeto sequelize
const sequelize = require('../util/database');
//Definicion del modelo (tabla)

const InicioSesion = sequelize.define('Sesion',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true   
    },
    usuario:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    fecha:{
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    horaInicio:{
        type: Sequelize.TIME,
        allowNull: false
    },
    horaFinal:{
        type: Sequelize.TIME,
        allowNull: false
    }
});

module.exports = InicioSesion;