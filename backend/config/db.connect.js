const mariadb = require('mysql');
const dbConfig = require('./db.config.js')
const conn = mariadb.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
});

module.exports = conn;