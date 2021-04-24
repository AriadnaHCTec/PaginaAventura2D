const express = require("express");
const Jugador = require('../models/encuesta');
const usuarioController = require('../controllers/usuario');
const encuestaController = require('../controllers/encuesta');
const usuarioNivelController = require('../controllers/usuarioNivel');
const nivelController = require('../controllers/nivel');
//mini app
const router = express.Router();

//Mostrar el formulario
router.get('/home',usuarioController.getHomeSteam);

module.exports =router;
