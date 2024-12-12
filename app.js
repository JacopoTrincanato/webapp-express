//importo express
const express = require('express');

//creo una costante app per utilizzare express
const app = express();

//creo una variabile che richiama cors
const cors = require('cors');

//importo le rotte
const moviesRouter = require('./routes/movies.js');

//importo notFound
const notFound = require('./middlewares/notFound.js');

//importo internalError
const internalError = require('./middlewares/internalError.js');

//creo una variabile per l'HOST
const HOST = process.env.HOST;

//creo una variabile per la PORT
const PORT = process.env.PORT;

//faccio girare il server
app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

// Uso cors per permettere richieste da tutti gli origin
app.use(cors());

//uso le rotte
app.use('/movies', moviesRouter);

//gestisco l'errore 404
app.use(notFound);

//gestisco l'errore 500
app.use(internalError);