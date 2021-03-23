//Renderiz ala vista principal al usuario

const renderIndex = (req, res) => {
    res.render('index.ejs');
};

//Renderiza el Loguin
const renderLoguin = (req, res) => {
    res.render('loguin.ejs');
};


//entrada de datos
const createLoguinPerfil = (req, res) => {

};

module.exports = {
    renderIndex,
    renderLoguin,
    createLoguinPerfil
}