// get the client
const mysql = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.DB_PORT,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

module.exports = connection;