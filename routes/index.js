const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const sampleUserRouter = require('./sampleUser')

router.get('/users', userRouter)
router.get('/users/:id', userRouter)
router.post('/users', userRouter)

router.get('/users/sample', sampleUserRouter)

module.exports = router;