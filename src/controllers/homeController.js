const connectDB = require('../config/connectDB');

const getHomepage = (req, res) => {
    res.render('index.ejs')
}


const postCreatePersons = async (req, res) => {
    let { Name, Gmail, Address, City, Phone } = req.body;
    console.log(Name, Gmail, Address, City, Phone);

    let [results, fields] = await connectDB.query(
        `INSERT INTO Persons(Name, Gmail, Address, City, Phone) VALUES (?,?,?,?,?)`,
        [Name, Gmail, Address, City, Phone])
    console.log("Kết quả truy vấn:", results);
    // connectDB.query(
    //     `INSERT INTO Persons(Name, Gmail, Address, City, Phone) VALUES (?,?,?,?,?)`,
    //     [Name, Gmail, Address, City, Phone],A
    //     function (err, results) {
    //         if (err) {
    //             console.error("Lỗi khi thực hiện truy vấn:", err);
    //             return;
    //         }
    //         console.log("Kết quả truy vấn:", results);
    //     }
    // );

};


const getCreatPage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage, postCreatePersons, getCreatPage
}