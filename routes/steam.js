const express = require("express");
const Jugador = require('../models/encuesta');
const usuarioController = require('../controllers/usuario');
const usuarioSteam = require('../controllers/usuarioSteam');

//mini app
const router = express.Router();

//Mostrar el formulario
router.get('/home',usuarioController.getHomeSteam);

router.get('/inicioSesionSteam',usuarioSteam.getInicioSesion);
router.get('/error',usuarioSteam.getError);
router.post('/iniciarSesion',usuarioSteam.postIniciarSesion);


module.exports =router;
