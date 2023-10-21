const User = require('../models/user');

const getUserInfo = (req, res, next) => {
  User.findById(req.params.userId || req.user._id)
    .then((user) => res.status(200).send(user))
    .catch(next);
};

const updateUserInfo = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    // .orFail(new NotFoundError('Запрашиваемая запись не найдена'))
    .then((user) => res.status(200).send(user))
    .catch(next);
};

module.exports = { getUserInfo, updateUserInfo };