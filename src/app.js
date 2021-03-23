//instancia de modulos o Framworks
const express = require('express');
const colors = require('colors');
const app = express();
const config = require('./config.js');



//settings

app.set("port", config);
app.set('appName', 'TuMascotaServer');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');




//Instancia de MiddleWre (Funciones)
const morgan = require('morgan');
app.use(morgan('combined'));



//Requiriendo Rutas
const routes = require('./routes/routes.js');
const routesApi = require('./routes/routes-api');


//requerir rutas del archivo routes donde se establecen
//para su uso se pasan a un Middlewere (funcion)

//Rutas

app.use(routes);
app.use('/api', routesApi);
app.get('*', (req, res) => {
    res.end('Not Found');
});

module.exports = app;
//export default app;