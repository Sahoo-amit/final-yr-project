const express = require('express')
const router = express.Router()
const admin_middleware = require('../middlewares/admin_middleware')
const jwt_middleware = require('../middlewares/jwt_middleware')
const controllers = require('../controllers/controllers')

router.route('/user').get(jwt_middleware, admin_middleware, controllers.admin)
router.route('/user/delete/:id').delete(jwt_middleware, admin_middleware, controllers.deleteUser)

module.exports = router