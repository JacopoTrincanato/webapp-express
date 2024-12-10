//importo express
const express = require('express');

//creo una costante app per utilizzare express
const app = express();

//importo le rotte
const moviesRouter = require('./routes/movies.js');

//importo notFound
const notFound = require('./middlewares/notFound.js');

//creo una variabile per l'HOST
const HOST = process.env.HOST;

//creo una variabile per la PORT
const PORT = process.env.PORT;

//faccio girare il server
app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

//uso le rotte
app.use('/movies', moviesRouter);

//gestisco l' errore 404
app.use(notFound);