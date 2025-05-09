const express = require('express');
const dataController = require('../controllers/data');

const router = express.Router();

router.get('/cardData/:id?', dataController.cardData);
router.get('/saleScore/:id?', dataController.saleScore);

module.exports = router;