const express = require('express')
const router = express.Router()
const sampleUserController = require('../controllers')

router.get('/users/sample', sampleUserController.list)

module.exports = router;