//importo express
const express = require('express');

//creo una costante app per utilizzare express
const app = express();

//creo una variabile per l'HOST
const HOST = process.env.HOST;

//creo una variabile per la PORT
const PORT = process.env.PORT;

//importo la connessione
const movieConnection = require('./db/moviesConnection.js');
const connection = require('./db/moviesConnection.js');

//faccio girare il server
app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

//creo una rotta index
app.get('/', (req, res) => {

    //creo una costante per la query
    const sql = 'SELECT * FROM movies';

    //connetto la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            error: err
        });

        res.json({
            movies: results,
            count: results.length
        })
    });
});