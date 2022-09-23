'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', 
    { 
    post_id: {
      allowNull: false,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      type: Sequelize.INTEGER    
    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    }, 
    });
  },

  down: async (queryInterface, Sequelize) => { 
   await queryInterface.dropTable('posts_categories');
  }
};
