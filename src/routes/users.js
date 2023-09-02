const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/*   /users   */

router
    .get('/register', usersController.register)
    .get('/login',usersController.login)
    

module.exports = router;
