//Configuración de sequelize
const Sequelize = require('sequelize');

//Asiganción de valores específicos a la BD
const nombreDB = 'videojuego'
const usuarioDB = 'sa'
const passwordDB = 'Password1234$'
const hostDB = 'localhost'
const dialectoDB= 'mssql'

const sequelize = new Sequelize(nombreDB,usuarioDB,passwordDB,{
    host: hostDB,
    dialect:dialectoDB,
    dialectOptions:{
        options:{
            useUTC: false,
            dataFirst: 1
        }
    },
    define:{
        timestamps: false,
        freezeTableName: true
    }
});

//exportando el objeto sequelize
module.exports = sequelize;
