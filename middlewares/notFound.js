//creo un errore 404
const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({ error: 'notFound' });
};

module.exports = notFoundMiddleware