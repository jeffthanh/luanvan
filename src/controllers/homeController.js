const connectDB = require('../config/connectDB');
const { getAllPerson, getUpdatePersonsID, postUpdatePersonsID, postDeletePersonsID } = require('../services/CRUDService')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/User');


const getHomepage = async (req, res) => {
    let results = await getAllPerson();
    res.render('index.ejs', { listPersons: results })
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
    res.render('edit.ejs', { user: person });
}


const getCreatPage = (req, res) => {
    res.render('create.ejs');
}

const postUpdatePersons = async (req, res) => {
    let { Name, Gmail, Address, City, Phone, PersonID } = req.body;


    await postUpdatePersonsID(Name, Gmail, Address, City, Phone, PersonID);
    res.redirect('/');

}

const getDeletePersons = async (req, res) => {
    const userId = req.params.id;
    let person = await getUpdatePersonsID(userId);
    res.render('delete.ejs', { user: person })
}

const postDeletePersons = async (req, res) => {
    const Id = req.body.PersonID;
    await postDeletePersonsID(Id);
    res.redirect('/',);

}

const getLogin = (req, res) => {
    res.render('login.ejs');
}

const postLogin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        // Kiểm tra nếu username hoặc password bị thiếu
        return res.render('login', { error: 'Vui lòng nhập tên đăng nhập và mật khẩu' });
    }

    try {
        const userRows = await User.findByUsername(username);

        if (!userRows || userRows.length === 0) {
            // Xử lý trường hợp tên người dùng không tồn tại
            return res.render('login', { error: 'Tên đăng nhập không tồn tại' });
        }


        const user = userRows[0];

        if (!user.password) {
            // Xử lý trường hợp mật khẩu không tồn tại
            return res.render('login', { error: 'Mật khẩu không tồn tại' });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            // Password không khớp
            return res.render('login', { error: 'Sai mật khẩu' });
        }

        const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

        req.session.user = user;
        req.session.token = token;

        res.redirect('/');
    } catch (err) {
        console.error(err);
        // Xử lý lỗi một cách thích hợp ở đây, ví dụ: gửi thông báo lỗi đến người dùng hoặc ghi log
        res.redirect('/login');
    }
}


module.exports = {
    postLogin, getLogin, postDeletePersons, getDeletePersons, getHomepage, postCreatePersons, getCreatPage, getUpdatePersons, postUpdatePersons
}