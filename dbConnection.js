const mysql = require('mysql2');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: "ecommerce_db"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = con