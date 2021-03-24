//Rutas

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const { renderIndex, renderLoguin } = require('../controlers/entries.controler');
const { request } = require('express');
//Setting to entry dates

//Create application/x-www-form-urlencoded parser
const urlencoded = bodyParser.urlencoded({ extended: true });




//Routes
//POST/loguin gets urlencoded bodies
router.post('/loguin', bodyParser.urlencoded, (req, res) => {
    res.send('Recived ' + bodyParser.json.toString + " and te request: => " + request.body.toString);
})


//-  /
router.get('/', renderIndex);

//  /loguin
router.get('/loguin', renderLoguin);




//importar modulo router
module.exports = router;