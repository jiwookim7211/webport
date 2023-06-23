var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'user',
    password: '385866',
    database: 'jiwoo'
});
db.connect();

module.exports = db;