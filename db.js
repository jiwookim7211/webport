var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '385866',
    database: 'jiwoo'
});
db.connect();

module.exports = db;