const express = require('express');
const inshgtController = require('../controllers/inshgit');

const router = express.Router();

router.get('/bestInfluencer', inshgtController.bestInfluencer);
router.get('/getBestCountry', inshgtController.getBestCountry);
router.get('/getBestCategory', inshgtController.getBestCategory);
router.get('/getBestDevice', inshgtController.getBestDevice);
router.get('/getBestColor', inshgtController.getBestColor);
router.get('/getBestBrand', inshgtController.getBestBrand);

module.exports = router;