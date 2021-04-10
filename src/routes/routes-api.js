const { jsonParser } = require('../app');
const router = express.Router();

router.get('/', jsonParser, (req, res) => {

});
module.exports = router;