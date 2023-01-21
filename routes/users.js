const express = require('express')
const router = express.Router()
const usersController = require('../controllers')

router.get('/users', usersController.list)
router.get('/users/:id', usersController.show)
router.post('/users', usersController.create)

module.exports = router;