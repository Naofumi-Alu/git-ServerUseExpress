//Rutas

const { Console } = require('console');
const express = require('express');
const router = express.Router();
const util = require('util');


const { renderIndex } = require('../controlers/entries.controler');


//-  /
router.get('/', renderIndex);

//  /loguin
//router.get('/loguin', renderLoguin);
//Renderiza el Loguin
router.get('/loguin', (req, res) => {
    res.render('loguin.ejs'), util.inspect(req.param.username);
})


//Entry Data

router.post('/loguin', (req, res) => {

    var perfil = util.inspect(req.params.username);

    res.redirect('/loguin/' + perfil);

    console.log('recives Welcome', perfil);

});

//importar modulo router
module.exports = router;