//importo la connessione
const connection = require('../db/moviesConnection.js');

//creo una rotta index
const index = (req, res) => {

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
};

//creo una rotta show
const show = (req, res) => {

    //creo una costante per la query
    const sql = 'SELECT * FROM movies WHERE id = ?';

    //creo una costante dove salvare l'id
    const id = req.params.id;

    //connetto la query dei film
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({
            error: err
        });

        if (results.length === 0) return res.status(404).json({ error: 'Movie not found!' });

        //creo una query per trovare le recensioni
        const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ? ORDER BY id DESC';

        //connetto la query delle review
        connection.query(reviewSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: err });

            //associo i film alle review
            const movie = {
                ...results[0],
                reviews: reviewsResults
            };

            res.json(movie);
        });
    });
};

//creo una rotta storeReview
const storeReview = (req, res) => {

    //recupero l'id e lo salvo in una costante movie_id
    const movie_id = req.params.id;

    //recupero le chiavi che mi servono dal body
    const { name, vote, text } = req.body;

    //creo una data in una costante now
    const now = new Date();

    //creo una costante updated_at per accedere all'anno, al mese e al giorno
    const updated_at = `${now.getFullYear()}-${(now.getMonth() + 1)}-${now.getDate()}`;

    //creo una costante per la query
    const newReviewSql = 'INSERT INTO reviews SET movie_id = ?, name = ?, vote = ?, text = ?, updated_at = ?'

    //uso la connection e 
    connection.query(newReviewSql, [movie_id, name, vote, text, updated_at], (err, results) => {

        //restituisco un errore 500 nel caso di insuccesso
        if (err) return res.status(500).json({ error: err });

        //altrimenti ritorno uno status 201 con success
        res.status(201).json({ success: true });
    });

};

//esporto index e show
module.exports = { index, show, storeReview };