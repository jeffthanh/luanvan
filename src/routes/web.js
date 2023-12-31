const express = require('express');
const route = express.Router();
const {postLogin, getLogin, getHomepage,getDeletePersons,postDeletePersons,postCreatePersons ,getCreatPage,getUpdatePersons,postUpdatePersons} = require('../controllers/homeController');

route.get('/edit/:id',getUpdatePersons);
route.get('/', getHomepage);
route.get('/create',getCreatPage);
route.post('/create-person', postCreatePersons);
route.post('/update-person', postUpdatePersons);
route.get('/delete/:id', getDeletePersons);
route.post('/delete', postDeletePersons);
route.get('/login',getLogin);
route.post('/login',postLogin); 
module.exports = route;