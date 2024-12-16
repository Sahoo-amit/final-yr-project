const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

router.route('/register').post(controllers.register)
router.route('/login').post(controllers.login)
router.route('/contact').post(controllers.contact)

module.exports = router