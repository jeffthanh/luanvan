const express = require('express');
const route = express.Router();
const { getHomepage,postCreatePersons ,getCreatPage,getUpdatePersons} = require('../controllers/homeController');

route.get('/edit/:id',getUpdatePersons);
route.get('/', getHomepage);
route.post('/create-person', postCreatePersons);
route.get('/create',getCreatPage);
module.exports = route;