//importo express
const express = require('express');

//creo una costante app per utilizzare express
const router = express.Router();

//importo moviesController
const moviesController = require('../controllers/moviesController.js');

//utilizzo index
router.get('/', moviesController.index);

//utilizzo show
router.get('/:id', moviesController.show);

//creo una rotta che mi permetta di aggiungere una recensione
router.post('/:id/review', moviesController.storeReview)

//esporto le rotte
module.exports = router;