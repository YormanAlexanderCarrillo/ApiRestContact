const express = require('express')
const router = express.Router()

const {sendMail}  = require('../Controllers/Controller_Contact')

router.post('/', sendMail)

module.exports = router