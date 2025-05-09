const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Article = sequelize.define('articles', {
    'Unnamed: 0': {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    likesNbr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    offerId: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    order: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tracking_link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wishlistId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    hasWishlist: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    plugin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    test: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
  }, {
    tableName: 'articles',
    timestamps: false,
  });

  return Article;
};
