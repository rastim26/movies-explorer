const router = require('express').Router();
const { getUserInfo, updateUserInfo } = require('../controllers/users');
const { validateUserFields } = require('../middlewares/validation');

router.get('/me', getUserInfo);
router.patch('/me', validateUserFields, updateUserInfo);

module.exports = router;
