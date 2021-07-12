var express = require('express');
var router = express.Router();
// home 

router.get('/', function(req, res, next) {
    res.render('home', { title: '2ndHand' });
});

module.exports = router;