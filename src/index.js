//servidor config


const app = require('./app');

app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});



/*
server.listen(3038, () => {
    console.log('Server on port 3038 succsesful'.green);
    console.log('Nombre del Servidor: ', server.get('ServerName'));
});
*/