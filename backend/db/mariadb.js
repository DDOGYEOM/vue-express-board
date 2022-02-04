const mariadb = require('mariadb');
const conn = mariadb.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password: '1234',
    database: 'board_project'
});

module.exports = conn;