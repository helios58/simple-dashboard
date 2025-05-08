const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Brands = sequelize.define('brands', {
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        premium: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        href: {
            type: DataTypes.STRING,
            allowNull: true
        },
        offerId: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categ: {
            type: DataTypes.STRING,
            allowNull: true
        },
        key: {
            type: DataTypes.STRING,
            allowNull: true
        },
        localisation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        private: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        tableName: 'brands',
        timestamps: false,
    });

    return Brands;
};
