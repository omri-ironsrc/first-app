const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()
const verifySuperadmin = require('../middleware/verifySuperadmin')

router.route('/')
    .get(userController.getAllUsers)
    .post(verifySuperadmin, userController.addNewUser)

module.exports = router
