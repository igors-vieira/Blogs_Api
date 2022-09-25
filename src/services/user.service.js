const { User } = require('../models');

const loginPost = async ({ email, password }) => {
  const users = await User.findOne({ where: { email } });

  if (!users) return false;

  if (users.dataValues.password !== password) return false;

  return users.dataValues.id;
};

const userPost = async ({ displayName, email, password, image }) => {
  const hasUsers = await User.findOne({ where: { email } });
  if (hasUsers) return false;

  const users = await User.create({ displayName, email, password, image });

  return users.dataValues.id;
};

const getByUserId = async (id) => {
  const users = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  return users;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = {
  loginPost,
  userPost,
  getByUserId,
  getAllUsers,
};
