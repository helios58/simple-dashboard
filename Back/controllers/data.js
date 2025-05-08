const asyncHandler = require("express-async-handler");
const sequelize = require('../config/database');
const SalesModel = require('../models/sales');
const InfluencersModel = require('../models/influencers');
const CategoriesModel = require('../models/categories');
const Categories = CategoriesModel(sequelize);
const Influencers = InfluencersModel(sequelize);
const { Op } = require("sequelize");

const Sales = SalesModel(sequelize);

exports.cardData = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { startTimestamp, endTimestamp } = req.query;
    let salesData, influencersData
    if (startTimestamp !== undefined && endTimestamp !== undefined) {
        salesData = await Sales.findAll({
            where: {
                influencer: id,
                createdat: {
                    [Op.between]: [startTimestamp, endTimestamp]
                }
            },
            attributes: ['amount'],
            raw: true
        });

        influencersData = await Influencers.findAll({
            where: {
                createdAt: {
                    [Op.between]: [startTimestamp, endTimestamp]
                }
            },
            raw: true
        });
    } else {
        salesData = await Sales.findAll({
            where: { influencer: id },
            attributes: ['amount'],
            raw: true,
        });

        influencersData = await Influencers.findAll({
            raw: true,
        });
    }
    const activeInfluencers = influencersData.filter(influencer => influencer.isOnline === 1);
    const transactionCount = salesData.length;
    const totalAmount = salesData.reduce((sum, sale) => sum + sale.amount, 0);
    const averageAmount = transactionCount > 0 ? totalAmount / transactionCount : 0;

    res.status(200).json({
        totalAmount,
        transactionCount,
        averageAmount,
        influencersCount: influencersData.length,
        activeInfluencersCount: activeInfluencers.length,
    });
});

exports.saleScore = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const saleScoreData = await Influencers.findAll({
        where: { uid: id },
        attributes: ['score'],
        raw: true,
    });

    const score = saleScoreData.length > 0 ? saleScoreData[0].score : null;

    res.status(200).json({ score });
});

exports.bestInfluencer = asyncHandler(async (req, res) => {
    const bestInfluencer = await Influencers.findOne({
        attributes: ['firstName', 'score'],
        order: [['score', 'DESC']],
        raw: true,
    });

    const firstName = bestInfluencer ? bestInfluencer.firstName : null;

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
        return res.status(404).json({ message: 'No category found' });
    }

    const categoryDetails = await Categories.findOne({
        attributes: ['text-fr'], 
        where: { cle: mostUsedCategory }, 
        raw: true,
    });

    const categoryText = categoryDetails ? categoryDetails['text-fr'] : null;

    res.status(200).json({ categoryText });
});
