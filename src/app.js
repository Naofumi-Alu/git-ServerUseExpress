//instancia de modulos o Framworks
const express = require('express');
const colors = require('colors');
const app = express();
const config = require('./config.js');
const path = require('path');



//settings

app.set("port", config);
app.set('appName', 'TuMascotaServer');
//establece la direccion de la carpeta de las vistas por ejemplo
app.set('views', path.join(__dirname + '/views'));
//establece el motor de plantillas
app.set('view engine', 'ejs');




//**----Instancia de MiddleWre (Funciones)--**
const morgan = require('morgan');


//se usa para saber que peticiones llegan al servidor
app.use(morgan('dev'));
app.use(morgan('combined'));



//Requiriendo Rutas
const routes = require('./routes/routes.js');
const routesApi = require('./routes/routes-api');


//requerir rutas del archivo routes donde se establecen
//para su uso se pasan a un Middlewere (funcion)

//Rutas

app.use(routes);
app.use('/api', routesApi);


//404 handler
app.get('*', (req, res) => {
    res.status(404).render('404');
});

module.exports = app;
//export default app;