//Renderiz ala vista principal al usuario

const { response } = require("express");

const renderIndex = (req, res) => {
    res.render('index.ejs');
};

//Renderiza el Loguin
const renderLoguin = (req, res) => {
    res.render('loguin.ejs');
};


//entrada de datos
const createLoguinPerfil = (req, res) => {
    console.log(req.body);
    res.send('recived');
};

module.exports = {
    renderIndex,
    renderLoguin,
    createLoguinPerfil
}