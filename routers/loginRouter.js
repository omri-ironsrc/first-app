const express = require('express')
const loginController = require('../controllers/loginController')
const router = express.Router()
const mwVerifyAdmin = require('../middleware/mwVerifyAdmin')

router.route('/')
    .get(loginController.loginHome)
    .post(mwVerifyAdmin, loginController.login)

module.exports = router
