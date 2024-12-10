//importo express
const express = require('express');

//creo una costante app per utilizzare express
const router = express.Router();

//importo moviesController
const moviesController = require('../controllers/moviesController.js');

//utilizzo index
router.get('/movies', moviesController.index);

//utilizzo show
router.get('/movies/:id', moviesController.show);

//esporto le rotte
module.exports = router;