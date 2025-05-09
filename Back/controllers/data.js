const asyncHandler = require("express-async-handler");
const sequelize = require('../config/database');
const SalesModel = require('../models/sales');
const InfluencersModel = require('../models/influencers');
const Influencers = InfluencersModel(sequelize);
const { Op } = require("sequelize");

const Sales = SalesModel(sequelize);

exports.cardData = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log("ID", id);
    const { startTimestamp, endTimestamp } = req.query;
    let salesData, influencersData
    if (startTimestamp !== undefined && endTimestamp !== undefined) {
        salesData = await Sales.findAll({
            where: {
                ...(id ? { influencer: id } : {}), 
                               createdat: {
                    [Op.between]: [startTimestamp , endTimestamp ]
                }
            },
            attributes: ['amount'],
            raw: true
        });

        influencersData = await Influencers.findAll({
            where: {
                createdAt: {
                    [Op.between]: [startTimestamp , endTimestamp ]
                }
            },
            raw: true
        });
    } else {
        salesData = await Sales.findAll({
            where: {
                ...(id ? { influencer: id } : {}), 
            },
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
        where: {
            ...(id ? { uid: id } : {}), 
        },        attributes: ['score'],
        raw: true,
    });

    const score = saleScoreData.length > 0 ? saleScoreData[0].score : null;

    res.status(200).json({ score });
});
