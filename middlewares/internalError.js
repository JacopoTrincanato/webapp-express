//creo un errore 500
function internalError(err, req, res, next) {
    console.log('Error: ', err.message);

    //questo stampa la stack trace dell'errore
    console.error(err.stack);
    res.status(500).send({
        message: 'something broke',
        error: err.message
    })

};

//esporto internalError
module.exports = internalError;