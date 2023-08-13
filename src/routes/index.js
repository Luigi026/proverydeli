const express = require('express');
const { index, admin, pedidos } = require('../controllers/indexController');
const router = express.Router();

/*  /  */
router.get('/', index);
router.get('/orders', pedidos)
router.get('/admin', admin);

module.exports = router;
