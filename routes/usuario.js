const express = require("express");
const usuarioController = require('../controllers/usuario')
//mini app
const router = express.Router();

//Mostrar el formulario
router.get('/home',usuarioController.getHome);

//Mostrar el formulario
router.get('/agregarUsuario',usuarioController.getAgregarUsuario);

router.get('/inicioSesion',usuarioController.getInicioSesion);

//Obtener los datos del formulario
router.post('/agregarUsuario',usuarioController.postAgregarUsuario);

//Mostrar al usuario el resultado de la transaccion
router.get('/confirmacion',usuarioController.getConfirmacion);

/*Mostrar los registros de la base de datos
router.get('/registros',usuarioController.getRegistros);*/

//Mostrar un solo registro
router.get('/registro/:usuario',usuarioController.getRegistro);





/*INTERACCIÓN CON VIDEOJUEGO*/ 
//Obtener los datos del formulario
router.post('/iniciarSesion',usuarioController.postIniciarSesion);

module.exports =router;
