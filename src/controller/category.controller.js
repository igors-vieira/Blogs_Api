const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await categoryService.createCategory({ name });

    if (!result) return res.sendStatus(400);
  
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const allCategories = async (_req, res) => {
  try {
    const result = await categoryService.allCategories();

    if (!result) res.sendStatus(400);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  createCategory,
  allCategories,
};