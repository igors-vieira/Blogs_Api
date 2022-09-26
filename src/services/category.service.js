const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const categories = await Category.create({ name });

  return categories;
};

const allCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  allCategories,
};