const express = require('express');
const dotenv = require("dotenv");
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connectDB = require('./config/connectDB');
dotenv.config();


const app = express();
const port = process.env.PORT || 8000;
configViewEngine(app);


connectDB.query(
    'SELECT * FROM Persons ',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

//khai bao route
app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})