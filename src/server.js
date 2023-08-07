const express = require('express');
const dotenv = require("dotenv");
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connectDB = require('./config/connectDB');
dotenv.config();


const app = express();
const port = process.env.PORT || 8000;
configViewEngine(app);

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


//khai bao route
app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})