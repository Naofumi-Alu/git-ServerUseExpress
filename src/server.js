//instancia de modulos o Framworks
const express = require('express');
const colors = require('colors');
const server = express();


//settings

server.set('ServerName', 'TuMascotaServer');
server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');




//Instancia de MiddleWre (Funciones)
const morgan = require('morgan');
server.use(morgan('combined'));



//Requiriendo Rutas
const routes = require('./routes/routes.js');
const routesApi = require('./routes-api');


//requerir rutas del archivo routes donde se establecen
//para su uso se pasan a un Middlewere (funcion)

//Rutas

server.use(routes);
server.use('/api', routesApi);
server.get('*', (req, res) => {
    res.end('Not Found');
});