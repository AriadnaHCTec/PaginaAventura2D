//funcion que recibe el objeto de conexion
function applyRelations(sequelize){
    console.log(sequelize.models);
    const Jugador = sequelize.models.jugador;
    const Nivel = sequelize.models.nivel;
    const Encuesta = sequelize.models.encuesta;
    const JugadorNivel = sequelize.models.jugadorNivel

    //Relacion 1:N

    Encuesta.hasMany(Jugador);
    Jugador.belongsTo(Encuesta);

    //Relacion M:N
    Jugador.belongsToMany(Nivel, {through:JugadorNivel});
    Nivel.belongsToMany(Jugador, {through:JugadorNivel});

}

module.exports = {applyRelations};