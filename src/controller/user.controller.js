const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const userService = require('../services/user.service');

const postUsers = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.userPost({ email, password });

  if (result) {
    res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ email }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(201).json({ token });
};

module.exports = {
  postUsers,
};