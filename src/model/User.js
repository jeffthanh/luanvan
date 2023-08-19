const connectDB = require('../config/connectDB');

class User {
    static async findByUsername(username) {
        try {
            const [rows] = await connectDB.query('SELECT * FROM users WHERE username = ?', [username]);
            
            if (rows.length > 0) {
                console.log(rows[0])
                return rows[0]; // Trả về bản ghi đầu tiên nếu có
            } else {
                return null; // Hoặc trả về null nếu không tìm thấy bản ghi nào
            }
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = User;
