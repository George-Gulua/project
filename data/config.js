const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: 'root',
    database: "service",
    password: '',
});

pool.on('enqueue', function (sequence) {
    if (sequence instanceof mysql.Sequences.Query) {
        console.log(sequence.sql);
    }
});

module.exports = pool;
