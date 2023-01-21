const express = require('express')
const router = express.Router()
const userRouter = require('./users')

router.get('/users', userRouter)
router.get('/users/:id', userRouter)
router.post('/users', userRouter)
router.put('/users/:id', userRouter)
router.delete('/users/:id', userRouter)

module.exports = router;