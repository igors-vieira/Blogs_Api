const { Op } = require('sequelize');
const { BlogPost, Category, User, PostCategory } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost
  .findAll({ include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }] });

  return posts;
};

const searchPosts = async (query) => {
  console.log(query);
  if (!query) return getAllPosts();
  const posts = await BlogPost
  .findAll({ where: { [Op.or]: [{ title: { [Op.substring]: query } }, 
    { content: { [Op.substring]: query } }] },
include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
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

const updatePostId = async (id, { title, content }) => {
  const updatePost = await BlogPost.update({ title, content }, { where: { id } });

  if (!updatePost) return false;

  const postUpdated = await getPostsId(id);

  return postUpdated;
};

const deletePostId = async (id, dataValues) => {
  const postToDelete = await getPostsId(id);

  if (!postToDelete) return false;

  if (dataValues.id !== postToDelete.userId) return 'unauthorized';

  const postDeleted = await BlogPost.destroy({ where: { id }, force: true });

  return postDeleted;
};

module.exports = {
  getAllPosts,
  getPostsId,
  createPost,
  updatePostId,
  deletePostId,
  searchPosts,
};
