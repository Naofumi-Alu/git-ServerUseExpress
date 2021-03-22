//Rutas

const express = require('express');
const router = express.Router();
//-  /
router.get('/', (req, res) => {
    res.render('index.ejs');

});

//  /loguin
router.get('/loguin', (req, res) => {
    res.render('loguin.ejs');
});


//importar modulo router
module.exports = router;