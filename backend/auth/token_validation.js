const jwt = require("jsonwebtoken");
require('dotenv').config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    checkToken: (req, res, next) => {
        if(req.cookies && req.cookies.token) {
            let token = req.cookies.token;
            jwt.verify(token, YOUR_SECRET_KEY, (err, decoded) => {
                if(err) {
                    console.log(err);
                    return res.json({
                        success: 0,
                        message: "Invalid Token..."
                    });
                }else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
                return res.json({
                    success: 0,
                    message: "Access Denied! Unauthorized User"
            });
        }
    }
}