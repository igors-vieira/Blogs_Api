const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const categories = await Category.create({ name });

  return categories;
};

module.exports = {
  createCategory,
};