const express = require('express')
const personControllers = require('../controllers/personController')
const router = express.Router()

router.route('/').get(personControllers.helloPerson)

module.exports = router
