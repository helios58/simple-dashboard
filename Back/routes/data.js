const express = require('express');
const dataController = require('../controllers/data');

const router = express.Router();

router.get('/cardData/:id', dataController.cardData);
router.get('/saleScore/:id', dataController.saleScore);
router.get('/bestInfluencer', dataController.bestInfluencer);
router.get('/getBestCountry', dataController.getBestCountry);
router.get('/getBestCategory', dataController.getBestCategory);

module.exports = router;