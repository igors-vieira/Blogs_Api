const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await categoryService.createCategory({ name });

    if (!result) return res.status(400).json({ message: 'deu errado ;(' });
  
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'deu errado ;(' });
  }
};

module.exports = {
  createCategory,
};