const express = require('express');
const ordersController = require('../controllers/ordersController');
const router = express.Router();

/* / */

router.get('/add', ordersController.add);





module.exports = router;