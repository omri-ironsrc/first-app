const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

// userAdmin  - onyl admin will perform delete and post otherwie return 401;
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.addNewUser)
    .delete(userController.deleteUser)

module.exports = router
