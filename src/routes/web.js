const express = require('express');
const route = express.Router();
const { getHomepage,postCreatePersons ,getCreatPage,getUpdatePersons,postUpdatePersons} = require('../controllers/homeController');

route.get('/edit/:id',getUpdatePersons);
route.get('/', getHomepage);
route.get('/create',getCreatPage);
route.post('/create-person', postCreatePersons);
route.post('/update-person', postUpdatePersons);
module.exports = route;