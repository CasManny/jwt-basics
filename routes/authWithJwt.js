const { register, login } = require('../controllers/authWithJwt')
const authMiddleware = require('../middlewares/authMiddleware')

const router = require('express').Router()


router.post('/register', register )
router.route('/login').post(authMiddleware, login)

module.exports = router