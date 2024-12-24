const express = require('express')
const router = express.Router()
const jwt_middleware = require('../middlewares/jwt_middleware')
const controllers = require('../controllers/controllers')

router.route('/register').post(controllers.register)
router.route('/login').post(controllers.login)
router.route('/contact').post(controllers.contact)
router.route('/course').get(controllers.course)
router.route('/course/:id').get(controllers.courseDetails)
router.route('/question/:id').get(controllers.getQuestionsByLanguage)
router.route('/user').get(jwt_middleware, controllers.user)

module.exports = router