//Rutas

const express = require('express');
const router = express.Router();


const { renderIndex, renderLoguin, createPerfil } = require('../controlers/entries.controler');


//-  /
router.get('/', renderIndex);

//  /loguin
router.get('/loguin', renderLoguin);

//Entry Data
router.post('/loguin', createPerfil);


//importar modulo router
module.exports = router;