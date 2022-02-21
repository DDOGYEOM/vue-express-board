const sql = require("./db.connect");

const User = function(user) {
    this.user_id= user.user_id;
    this.user_pwd = user.user_pwd;
    this.user_name = user.user_name;
    this.nickname= user.nickname;
    this.email = user.email;
};