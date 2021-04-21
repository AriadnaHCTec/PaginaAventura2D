/*//funcion que recibe el objeto de conexion
function applyRelations(sequelize){
    console.log(sequelize.models);
    const Usuario = sequelize.models.usuario;
    const Nivel = sequelize.models.nivel;
    const Encuesta = sequelize.models.encuesta;
    const UsuarioNivel = sequelize.models.usuarioNivel

    //Relacion 1:N

    Encuesta.hasMany(Usuario);
    Usuario.belongsTo(Encuesta);

    //Relacion M:N
    Usuario.belongsToMany(Nivel, {through:UsuarioNivel});
    Nivel.belongsToMany(Usuario, {through:UsuarioNivel});

}

module.exports = {applyRelations};*/