const express = require('express')
const userController = require('../controllers/userController')
const mwVerifySuperAdmin = require('../middleware/mwVerifySuperAdmin')
const router = express.Router()

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.addNewUser)
    .delete(mwVerifySuperAdmin, userController.deleteUser)

module.exports = router
