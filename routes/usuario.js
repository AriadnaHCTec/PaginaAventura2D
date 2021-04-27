const express = require("express");
const Jugador = require('../models/encuesta');
const usuarioController = require('../controllers/usuario');
const encuestaController = require('../controllers/encuesta');
const usuarioNivelController = require('../controllers/usuarioNivel');
const nivelController = require('../controllers/nivel');
//mini app
const router = express.Router();

//Mostrar el formulario
router.get('/home',usuarioController.getHome);

//Mostrar el formulario
router.get('/agregarUsuario',usuarioController.getAgregarUsuario);
router.get('/agregarEncuesta',usuarioController.getAgregarEncuesta);

router.get('/inicioSesion',usuarioController.getInicioSesion);

//Obtener los datos del formulario
router.post('/agregarUsuario',usuarioController.postAgregarUsuario);
router.post('/agregarEncuesta',encuestaController.postAgregarEncuesta);
router.post('/agregarNivel',nivelController.postAgregarNivel);
router.post('/agregarUsuarioNivel',usuarioNivelController.postAgregarUsuarioNivel);
router.post('/ActualizarNivel',usuarioNivelController.postActualizarNivel);


//Mostrar al usuario el resultado de la transaccion
router.get('/confirmacion',usuarioController.getConfirmacion);

//Mostrar los registros de la base de datos
router.get('/registros',usuarioController.getRegistros);

//Mostrar un solo registro
router.get('/registro/:usuario',usuarioController.getRegistro);


/*INTERACCIÓN CON VIDEOJUEGO*/
//Obtener los datos del formulario
router.post('/iniciarSesion',usuarioController.postIniciarSesion);

module.exports =router;
