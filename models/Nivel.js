const Sequelize = require('sequelize');

const Nivel = (sequelize)=>{
    sequelize.define('Nivel',{
        numNivel:{
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true   
        },
        tema:{
            type: Sequelize.STRING(50),
            allowNull: false
        }

    })
};

module.exports = Nivel;