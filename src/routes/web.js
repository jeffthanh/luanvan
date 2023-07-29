const express = require('express');
const route = express.Router();
const { getHomepage } = require('../controllers/homeController');


route.get('/', getHomepage);

module.exports = route;