const connectDB = require('../config/connectDB');
const {getAllPerson} = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllPerson();
    res.render('index.ejs', {listPersons: results})
}


const postCreatePersons = async (req, res) => {
    let { Name, Gmail, Address, City, Phone } = req.body;
    console.log(Name, Gmail, Address, City, Phone);

    let [results, fields] = await connectDB.query(
        `INSERT INTO Persons(Name, Gmail, Address, City, Phone) VALUES (?,?,?,?,?)`,
        [Name, Gmail, Address, City, Phone])
    console.log("Kết quả truy vấn:", results);
    

};


const getCreatPage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage, postCreatePersons, getCreatPage
}