const Sequelize = require('sequelize');
//Traer el objeto sequelize
const sequelize = require('../util/database');

const Nivel = sequelize.define('Nivel',{
    numNivel:{
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true   
    },
    tema:{
        type: Sequelize.STRING(50),
        allowNull: false
    }

});

module.exports = Nivel;