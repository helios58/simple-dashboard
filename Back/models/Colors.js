const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Colors = sequelize.define('colors', {
    cle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    "name-en": {
      type: DataTypes.STRING,
      allowNull: true
    },
    "name-fr": {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'colors',
    timestamps: false,
  });

  return Colors;
};
