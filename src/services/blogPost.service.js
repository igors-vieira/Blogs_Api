const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost
  .findAll({ include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }] });

  return posts;
};

const getPostsId = async (id) => {
  const posts = await BlogPost
  .findOne({ where: { id }, 
    include: [{
      model: User, as: 'user', attributes: { exclude: ['password'] },
    },
  { 
    model: Category, as: 'categories', through: { attributes: [] },
  }],
});

  return posts;
};

module.exports = {
  getAllPosts,
  getPostsId,
};
