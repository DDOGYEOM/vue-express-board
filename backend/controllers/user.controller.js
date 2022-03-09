const {User,create, getUserByUserID, getUsers, updateUser} = require("../models/user.model");
const { genSaltSync, hashSync, compareSync} = require("bcrypt");
const { sign } = require("jsonwebtoken");
require('dotenv').config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        const hashPwd = hashSync(body.user_pwd, salt);

        if(!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }
    
        const user = new User({
            user_id: body.user_id,
            user_pwd: hashPwd,
            user_name: body.user_name,
            nickname: body.nickname,
            email: body.email
        });

        create(user, (err,results) => {
            if(err) {
                console.log(err);
                return res.status(500).send({
                    message: err.message || "Some error occurred while creating the User."
                });
            }

            
            return res.status(200).send({message: 'create user success', body: results});
        });
    },

    getUserByUserID: (req, res) => {
        const userId = req.query.user_id
        getUserByUserID(userId, (err,result) => {
            if(err) {
                console.log(err);
                return res.status(500).send({
                    message: err.message || "Error retrieving User with id " + userId
                });
            }
            if(!result) {
                return res.json({
                    message: "not found"
                });
            }

            return res.status(200).send({message: 'get board success', body: result});
        });
    },

    getUsers: (req, res) => {
        getUsers((err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).send({
                    message: err.message || "Error retrieving UserList"
                });
            }
            return res.status(200).send({message: 'get board success', body: results});
        });
    },

    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        const hashPwd = hashSync(body.user_pwd, salt);

        const user = new User({
            user_id: body.user_id,
            user_pwd: hashPwd,
            user_name: body.user_name,
            nickname: body.nickname,
            email: body.email
        });

        updateUser(user, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Failed to update user"
            });
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
    },

    login: (req, res) => {
        const body = req.body;
        getUserByUserID(body.user_id, (err,result) => {
            if(err) {
                console.log(err);
                return res.status(500).send({
                    success: 0,
                    message: err.message || "Error retrieving User with id " + body.user_id
                });
            }
            if(!result) {
                return res.json({
                    success: 0,
                    message: "Invalid ID or Password"
                });
            }

            const checkPwd = compareSync(body.user_pwd, result.user_pwd);
            
            if(checkPwd) {
                const options = {
                    domain: "localhost",
                    httpOnly: true,
                };

                const jsontoken = sign({ result: result }, YOUR_SECRET_KEY, { algorithm: 'HS256', expiresIn: '10m'});
                
                res.cookie('login-Token', jsontoken, options);

                res.send({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken
                });
            }else {
                res.send({
                    success: 0,
                    message: "Invalid ID or Password"
                })
            }
        });
    }



}