const connectDB = require('../config/connectDB');

const getAllPerson = async () =>{
    let [results, fields] = await connectDB.query('SELECT * FROM Persons');
    return results;
}

const getUpdatePersonsID = async (userId) =>{
    let [results,fields] = await connectDB.query('select * from Persons where PersonID = ? ',[userId]);
    let person = results && results.length > 0 ? results[0] : {};
    return person
}
const postUpdatePersonsID= async (Name, Gmail, Address, City, Phone ,PersonID) =>{
    let [results, fields] = await connectDB.query(
        `UPDATE Persons SET Name =?, Gmail=?, Address=?, City=?, Phone=? WHERE PersonID=? `,
        [Name, Gmail, Address, City, Phone ,PersonID]);
    return results;
}

const postDeletePersonsID = async(PersonID)=>{
    let [results, fields] = await connectDB.query(
        `DELETE FROM Persons WHERE PersonID=? `,
        [PersonID]);
    return results;
}
module.exports = {getAllPerson, getUpdatePersonsID  , postUpdatePersonsID,postDeletePersonsID}