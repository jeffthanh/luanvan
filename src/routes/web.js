const express = require('express');
const route = express.Router();
const { getHomepage,postCreatePersons ,getCreatPage} = require('../controllers/homeController');


route.get('/', getHomepage);
route.post('/create-person', postCreatePersons);
route.get('/create',getCreatPage);
module.exports = route;