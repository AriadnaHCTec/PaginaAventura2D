//Configuración de sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relaciones');

//Asiganción de valores específicos a la BD
const nombreDB = 'videojuego';
const usuarioDB = 'sa';
const passwordDB = 'Password1234$';
const hostDB = 'localhost';
const dialectoDB= 'mssql';

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

//Cargar los modelos
const modelDefiners = [
    require('../models/usuario'),
    //require('../models/nivel'),
    require('../models/encuesta'),
    //require('../models/usuarioNivel')
];

//Vincular el objeto de conexion con los modelos
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//exportando el objeto sequelize (elemento de conexion)
module.exports = sequelize;
