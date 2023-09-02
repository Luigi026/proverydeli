const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


router
    .get('/', mainController.index)
    .get('/stores',mainController.stores)
    .get('/cadets',mainController.cadets)
    .get('/orders',mainController.orders)
    .get('/map',mainController.map)

    

module.exports = router;