const express = require('express')
const userController = require('../controllers/userController')
const verifySuperadmin = require('../middleware/verifySuperadmin')
const router = express.Router()

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.addNewUser)
    .delete(verifySuperadmin, userController.deleteUser)

module.exports = router
