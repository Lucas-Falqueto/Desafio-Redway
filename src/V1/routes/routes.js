const express = require('express')
const router = express.Router()
const register = require('../controllers/register.js')

router.post('/user/register', register)

module.exports = router;