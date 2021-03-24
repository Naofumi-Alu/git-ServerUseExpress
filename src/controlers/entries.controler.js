//Renderiz ala vista principal al usuario



//Renderiza el inicio
const renderIndex = (req, res) => {
    res.render('index.ejs');
};

//Renderiza el Loguin
const renderLoguin = (req, res) => {
    res.render('loguin.ejs');
};




module.exports = {
    renderIndex,
    renderLoguin
}