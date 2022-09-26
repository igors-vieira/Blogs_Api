module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: { 
      type:DataTypes.STRING,
      unique: true, 
    },
    password: { 
      type: DataTypes.STRING, 
    },
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogPosts' });
  };

  return User;
};