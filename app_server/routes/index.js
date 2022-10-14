var express = require('express');
var router = express.Router();
var ctrlMekanlar = require('../controller/mekanlar');
var ctrlDigerleri = require('../controller/digerleri');

/* GET home page. */
router.get('/', ctrlMekanlar.anaSayfa);
router.get('/mekan', ctrlMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);
router.get('/hakkinda', ctrlDigerleri.hakkinda);
module.exports = router;
