const connectDB = require('../config/connectDB');

const getAllPerson = async () =>{
    let [results, fields] = await connectDB.query('SELECT * FROM Persons');
    return results;
}

module.exports = {getAllPerson}