var express = require('express');
var router = express.Router();
// home 


app.get('/posts/new', (req, res) => {
    res.render('posts-new');
})


module.exports = router;