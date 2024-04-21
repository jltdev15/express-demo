const express = require('express')

// ES 5 Require

const userController = require('../controller/UserController')

const router = express.Router();


router.get('/users', userController.getUsers)


module.exports = router;