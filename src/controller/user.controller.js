const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const userService = require('../services/user.service');

const loginPost = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.loginPost({ email, password });

  if (!result) {
   return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(200).json({ token });
};

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await userService.userPost({ displayName, email, password, image });

  if (!result) {
   return res.status(409).json({ message: 'User already registered' });
  }

  const token = jwt.sign({ displayName, email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(201).json({ token });
};

module.exports = {
  loginPost,
  userPost,
};