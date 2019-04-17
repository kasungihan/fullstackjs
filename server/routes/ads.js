const express = require('express')
const adsController = require('./../controllers/ads')
const router = express.Router();


router.get('/', adsController.getAds)

module.exports = router;