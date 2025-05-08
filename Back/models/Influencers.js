const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Influencers = sequelize.define('influencers', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    affiliate_id: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    android: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    appVersion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bank: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    camp_blocked: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    civility: {
      type: DataTypes.STRING,
      allowNull: true
    },
    code33: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dateOfBirthTimestamp: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hasProduct: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    isOnline: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    newsletter: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    phoneCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneCountryCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    private: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    referredBy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true
    },

    key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    agentId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    communitySize: {
      type: DataTypes.STRING,
      allowNull: true
    },
    favoriteBrandsIds: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastConnexion: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    kol_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ios: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    activateDirectShortlinks: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    hasProducts: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    
    favouriteBrands: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hasEmptyWishlists: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    latName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stability: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    amzn_id: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'influencers',
    timestamps: false,
  });

  return Influencers;
};
