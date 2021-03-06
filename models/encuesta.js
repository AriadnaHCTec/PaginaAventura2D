const Sequelize = require('sequelize');
//Traer el objeto sequelize

const Encuesta = (sequelize)=>{
    sequelize.define('Encuesta',{
        nombreUsuario:{
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true   
        },
        interesante:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        aprendio:{
            type: Sequelize.STRING(50),
            allowNull: false
        },    
        profesion:{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        interesStem:{
            type: Sequelize.STRING(50),
            allowNull: false
        }

    });
}

module.exports = Encuesta;