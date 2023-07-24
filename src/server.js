const express = require('express');
const path = require('path');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})