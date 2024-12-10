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

//esporto le rotte
module.exports = router;