//import { config } from "dotenv";
import { config } from "dotenv";
config();

export default {
    PORT: process.env.PORT || 5000,
};


/*const config = require('dotenv').config();


module.exports = config || 5000;
*/