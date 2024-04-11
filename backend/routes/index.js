const router = require('express').Router();
const { validateSigninFields, validateSignupFields } = require('../middlewares/validation');
const { login, createUser } = require('../controllers/user-auth');
const auth = require('../middlewares/auth');

router.post('/signin', validateSigninFields, login);
router.post('/signup', validateSignupFields, createUser);
router.use(auth);
router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

module.exports = router;
