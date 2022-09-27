const blogPostsService = require('../services/blogPost.service');

const getAllPosts = async (_req, res) => {
  try {
    const result = await blogPostsService.getAllPosts();

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getPostsId = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await blogPostsService.getPostsId(Number(id));

    if (!result) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { dataValues } = req.user;

  try {
    const result = await blogPostsService
    .createPost(dataValues.id, { title, content, categoryIds });

    if (!result) return res.status(400).json({ message: '"categoryIds" not found' });

    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllPosts,
  getPostsId,
  createPost,
};
