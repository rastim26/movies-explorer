const router = require('express').Router();
const { getUserInfo, updateUserInfo } = require('../controllers/users');
const { validateUserId, validateUserFields } = require('../middlewares/validation');

router.get('/me', validateUserId, getUserInfo);
router.patch('/me', validateUserFields, updateUserInfo);

module.exports = router;
