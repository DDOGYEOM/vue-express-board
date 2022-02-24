const jwt = require("jsonwebtoken");
require('dotenv').config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        console.log(YOUR_SECRET_KEY);
        
        if(token) {
            token = token.slice(7);
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