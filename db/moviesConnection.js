//importo mysql2
const mysql = require('mysql2');

//creo la connessione 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//creo un messaggio di errore
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

//esporto la connessione
module.exports = connection;