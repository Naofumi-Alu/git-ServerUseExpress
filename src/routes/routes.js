//Rutas

const express = require('express');
const router = express.Router();
const { renderIndex, renderLoguin, createLoguinPerfil } = require('../controlers/entries.controler');

//-  /
router.get('/', renderIndex);

//  /loguin
router.get('/loguin', renderLoguin);


// Entrada de datos
router.post('/loguin', createLoguinPerfil);

//importar modulo router
module.exports = router;