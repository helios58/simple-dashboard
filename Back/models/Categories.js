const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Categories = sequelize.define('categories', {
    cle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subCateg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    "text-en": {
      type: DataTypes.STRING,
      allowNull: true
    },
    "text-es": {
      type: DataTypes.STRING,
      allowNull: true
    },
    "text-fr": {
      type: DataTypes.STRING,
      allowNull: true
    },
    "text-pl": {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'categories',
    timestamps: false,
  });

  return Categories;
};
