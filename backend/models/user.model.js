const sql = require("../config/db.connect");


module.exports = {
    User: function(user) {
        this.user_id= user.user_id;
        this.user_pwd = user.user_pwd;
        this.user_name = user.user_name;
        this.nickname= user.nickname;
        this.email = user.email;
    }, 

    create: (data, callback) => {
        sql.query(`insert into user(user_id,user_pwd,user_name,nickname,email) values(?,?,?,?,?)`, [data.user_id, data.user_pwd, data.user_name, data.nickname, data.email], (err, res) => {
            if(err){
                console.log("error: ", err);
                return callback(err,null);
            }
            return callback(null, res);
        });
    },
    getUsers: callback => {
        sql.query(`select * from user`, [], (err, res) => {
            if(err) {
                return callback(err,null);
            }

            return callback(null, res);
        });
    },

    getUserByUserID: (userId,callback) => {
        sql.query(`select * from user where user_id = ?`, [userId], (err, res) => {
            if(err) {
                return callback(err,null);
            }

            return callback(null, res[0]);
        });
    },

    updateUser: (data,callback) => {
        sql.query(`update user set user_password=?, user_name=?, nickname=?, email=? where user_id=?`, [data.user_pwd, data.user_name, data.nickname, data.email, data.user_id], (err, res) => {
            if(err){
                return callback(err);
            }
            return callback(null, res[0]);
        })
    }
}