const express = require('express');
const router = express.Router();

const dataRoutes = require('./data');
const insightRoutes = require('./insight');
const dateRoutes = require('./date');
router.use('/data', dataRoutes);
router.use('/insight', insightRoutes);
router.use('/date', dateRoutes);

module.exports = router;
