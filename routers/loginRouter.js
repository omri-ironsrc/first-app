const express = require('express')
const loginController = require('../controllers/loginController')
const router = express.Router()
const verifyAdmin = require('../middleware/verifyAdmin')

router.route('/')
    .get(loginController.loginHome)
    .post(verifyAdmin, loginController.login)

module.exports = router
