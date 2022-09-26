const blogPostsService = require('../services/blogPost.service');

const getAllPosts = async (req, res) => {
  try {
    const result = await blogPostsService.getAllPosts();

    if (!result) res.sendStatus(400);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllPosts,
};
