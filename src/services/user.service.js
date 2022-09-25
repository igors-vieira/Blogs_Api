const { User } = require('../models');

const userPost = async ({ email, password }) => {
  const users = await User.findOne({ where: { email } });

  // console.log(users.password);

  if (!users) {
    return false;
  }

  if (users.dataValues.password !== password) {
    return false;
  }

  return true;
};

module.exports = {
  userPost,
};
