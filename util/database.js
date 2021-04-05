//Configuración de sequelize
const Sequelize = require('sequelize');

//Asiganción de valores específicos a la BD
const nombreDB = 'nombre'
const usuarioDB = 'sa'
const passwordDB = 'password'
const hostDB = 'localhost'
const dialectoDB= 'mssql'

const sequelize = new Sequelize(nombreDB,usuarioDB,password,{
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
