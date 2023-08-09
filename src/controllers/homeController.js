const connectDB = require('../config/connectDB');
const {getAllPerson,getUpdatePersonsID,postUpdatePersonsID,postDeletePersonsID} = require('../services/CRUDService')

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

const getUpdatePersons = async (req, res) => {
    const userId = req.params.id;
    let person = await getUpdatePersonsID(userId);
    res.render('edit.ejs',{user: person});
}


const getCreatPage = (req, res) => {
    res.render('create.ejs');
}

const postUpdatePersons =  async (req, res) => {
    let { Name, Gmail, Address, City, Phone,PersonID } = req.body;


    await postUpdatePersonsID( Name, Gmail, Address, City, Phone,PersonID );
    res.redirect('/');
    
}

const getDeletePersons = async (req, res) =>{
    const userId = req.params.id;
    let person = await getUpdatePersonsID(userId);
    res.render('delete.ejs',{user: person})
}

const postDeletePersons = async (req, res) =>{
    const Id = req.body.PersonID;
    await postDeletePersonsID(Id);
    res.redirect('/',);
    
}
module.exports = {
    postDeletePersons,getDeletePersons, getHomepage, postCreatePersons, getCreatPage,getUpdatePersons,postUpdatePersons
}