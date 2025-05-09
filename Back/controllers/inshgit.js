const asyncHandler = require("express-async-handler");
const sequelize = require('../config/database');

const SalesModel = require('../models/sales');
const InfluencersModel = require('../models/influencers');
const CategoriesModel = require('../models/categories');
const ColorsModel = require("../models/Colors");
const ArticlesModel = require("../models/Articles");
const BrandsModel = require("../models/Brands");

const Categories = CategoriesModel(sequelize);
const Influencers = InfluencersModel(sequelize);
const Colors = ColorsModel(sequelize);
const Sales = SalesModel(sequelize);
const Articles = ArticlesModel(sequelize);
const Brands = BrandsModel(sequelize);
exports.bestInfluencer = asyncHandler(async (req, res) => {
    const bestInfluencer = await Influencers.findOne({
        attributes: ['firstName', 'lastName', 'score'],
        order: [['score', 'DESC']],
        raw: true,
    });

    const firstName = bestInfluencer ? bestInfluencer.firstName + ' ' + bestInfluencer.lastName : null;

    res.status(200).json({ firstName });
});

exports.getBestCountry = asyncHandler(async (req, res) => {
    const mostUsedValue = await Sales.findOne({
        attributes: [
            'countrycode',
            [sequelize.fn('COUNT', sequelize.col('countrycode')), 'count'],
        ],
        group: ['countrycode'],
        order: [[sequelize.literal('count'), 'DESC']],
        raw: true,
    });

    const mostUsedCountry = mostUsedValue ? mostUsedValue.countrycode : null;

    res.status(200).json({ mostUsedCountry });
});

exports.getBestCategory = asyncHandler(async (req, res) => {
    const mostUsedValue = await Sales.findOne({
        attributes: [
            'categ',
            [sequelize.fn('COUNT', sequelize.col('categ')), 'count'],
        ],
        group: ['categ'],
        order: [[sequelize.literal('count'), 'DESC']],
        raw: true,
    });

    const mostUsedCategory = mostUsedValue ? mostUsedValue.categ : null;

    if (!mostUsedCategory) {
        return res.status(404).json({ message: 'No data found' });
    }

    const categoryDetails = await Categories.findOne({
        attributes: ['text-fr'],
        where: { cle: mostUsedCategory },
        raw: true,
    });

    const categoryText = categoryDetails ? categoryDetails['text-fr'] : null;

    res.status(200).json({ categoryText });
});

exports.getBestDevice = asyncHandler(async (req, res) => {
    const mostUsedValue = await Sales.findOne({
        attributes: [
            'devisetype',
            [sequelize.fn('COUNT', sequelize.col('devisetype')), 'count'],
        ],
        group: ['devisetype'],
        order: [[sequelize.literal('count'), 'DESC']],
        raw: true,
    });

    const bestDevice = mostUsedValue ? mostUsedValue.devisetype : null;

    res.status(200).json({ bestDevice });
});

exports.getBestColor = asyncHandler(async (req, res) => {
    const mostUsedValue = await Sales.findOne({
        attributes: [
            'maincolor',
            [sequelize.fn('COUNT', sequelize.col('maincolor')), 'count'],
        ],
        group: ['maincolor'],
        order: [[sequelize.literal('count'), 'DESC']],
        raw: true,
    });

    const mostUsedColor = mostUsedValue ? mostUsedValue.maincolor : null;

    if (!mostUsedColor) {
        return res.status(404).json({ message: 'No data found' });
    }

    const colorDetails = await Colors.findOne({
        attributes: ['name_fr'],
        where: { cle: mostUsedColor },
        raw: true,
    });

    const colorText = colorDetails ? colorDetails['name_fr'] : null;

    res.status(200).json({ colorText });
});

exports.getBestBrand = asyncHandler(async (req, res) => {
    const mostUsedValue = await Sales.findOne({
        attributes: [
            'brandname',
            [sequelize.fn('COUNT', sequelize.col('brandname')), 'count'],],
        group: ['brandname'],
        order: [[sequelize.literal('count'), 'DESC']],
        raw: true,
    });

    const mostUsedBrand = mostUsedValue ? mostUsedValue.brandname : null;

    if (!mostUsedBrand) {
        return res.status(404).json({ message: 'No data found' });
    }

    res.status(200).json({ mostUsedBrand });
});