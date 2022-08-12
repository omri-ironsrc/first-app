const express = require('express')
const helloController = require('../controllers/helloController')
const router = express.Router()

router.route('/').get(helloController.hello)

module.exports = router

// app.get('/health', (req, res) => {
//     console.log('health')
//     return res.status(200).send('hello')
// })
