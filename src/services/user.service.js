const { User } = require('../models');

const userPost = async ({ email, password }) => {
  const users = await User.findOne({ where: { email } });

  if (users) {
    return true;
  }

  if (users.password !== password) {
    return true;
  }

  return false;
};

module.exports = {
  userPost,
};
