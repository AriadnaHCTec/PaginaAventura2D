/*//funcion que recibe el objeto de conexion
function applyRelations(sequelize){
    console.log(sequelize.models);
    const Usuario = sequelize.models.Usuario;
    const Nivel = sequelize.models.Nivel;
    const Encuesta = sequelize.models.Encuesta;
    const UsuarioNivel = sequelize.models.usuarioNivel

    //Relacion 1:N
    Encuesta.belongsTo(Usuario);;
    Usuario.hasMany(UsuarioNivel);
    Nivel.hasMany(UsuarioNivel);

    //Relacion M:N
    /*Usuario.belongsToMany(Nivel, {through:UsuarioNivel});
    Nivel.belongsToMany(Usuario, {through:UsuarioNivel});*/

}

module.exports = {applyRelations};*/