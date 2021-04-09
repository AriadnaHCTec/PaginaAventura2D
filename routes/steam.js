const express = require("express");
const usuarioController = require('../controllers/inicioSesion')
//mini app
const router = express.Router();

//Subir la hora
router.post('/inicioSesion',usuarioController.postAgregarInicioSesion)
;
module.exports = router;
