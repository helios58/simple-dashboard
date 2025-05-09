const express = require('express');
const dateController = require('../controllers/date');

const router = express.Router();

router.get('/getBestDay', dateController.getBestDay);
router.get('/getBestTime', dateController.getBestTime);

module.exports = router;