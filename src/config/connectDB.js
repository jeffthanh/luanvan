// get the client
const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
dotenv.config();

// create the connection to database
const connection = mysql.createPool({
    host: 'localhost',
    port: process.env.DB_PORT,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;