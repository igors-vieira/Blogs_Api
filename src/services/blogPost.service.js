const { BlogPost, Category, User, PostCategory } = require('../models');

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

const createPost = async (userId, { title, content, categoryIds }) => {
  const posts = await BlogPost.create({ title, content, userId });
  const categories = await Promise.all(categoryIds
    .map((id) => Category.findOne({ where: { id } })));

  if (categories.some((category) => category === null)) return false;

  await PostCategory.bulkCreate(categoryIds.map((ids) => ({
    categoryId: ids,
    postId: posts.dataValues.id,
  })));

  return posts;
};

module.exports = {
  getAllPosts,
  getPostsId,
  createPost,
};

// {
//   "title": "Latest updates, August 1st",
//   "content": "The whole text for the blog post goes here in this key",
//   "categoryIds": [1, 2]
// }