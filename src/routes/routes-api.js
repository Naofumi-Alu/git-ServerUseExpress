const express = require('express');
const router = express.Router();
//const bodyParser = require('body-parser');

// create application/json parser
//const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    res.json({
        miPrimerApi: 'Works!'
    });
});
//POST /api/users gets JSON bodies
/*
router.post('/api', jsonParser, (req, res) => {

});
*/
module.exports = router;