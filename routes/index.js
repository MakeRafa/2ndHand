var express = require('express');
var router = express.Router();
// home 

router.get('/', function(req, res, next) {
    res.render('home');
});

router.get('/posts/new', function(req, res) {
    res.render('posts-new', {});
})

module.exports = router;