const sequelize = require('../config/database'); // Import the sequelize instance
const asyncHandler = require("express-async-handler");

exports.getBestDay = asyncHandler(async (req, res) => {
    const [results] = await sequelize.query(`
        SELECT 
        TO_CHAR(TO_TIMESTAMP(createdat), 'Day') AS weekday,
        COUNT(*) AS count
        FROM sales
        GROUP BY weekday
        ORDER BY count DESC
        LIMIT 1;

    `);
    const bestDay = results.length > 0 ? results[0].weekday : null; 
    res.status(200).json({ bestDay });
});

exports.getBestTime = asyncHandler(async (req, res) => {
    const [results] = await sequelize.query(`
        SELECT 
        TO_CHAR(TO_TIMESTAMP(createdat), 'HH24:MI') AS time,
        COUNT(*) AS count
        FROM sales
        GROUP BY time
        ORDER BY count DESC
        LIMIT 1;
    `);

    const bestTime = results.length > 0 ? results[0].time : null; 
    res.status(200).json({ bestTime });
});