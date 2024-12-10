//creo un errore 404
function notFoundMiddleware(req, res, next) {
    res.status(404).json({ error: 'notFound' });
};

//esporto notFoundMiddleware
module.exports = notFoundMiddleware;