const { User } = require('../models');

const loginPost = async ({ email, password }) => {
  const users = await User.findOne({ where: { email } });

  if (!users) return false;

  if (users.dataValues.password !== password) return false;

  return true;
};

const userPost = async ({ displayName, email, password, image }) => {
  const hasUsers = await User.findOne({ where: { email } });
  console.log(hasUsers);
  if (hasUsers) return false;

  await User.create({ displayName, email, password, image });

  return true;
};

module.exports = {
  loginPost,
  userPost,
};
