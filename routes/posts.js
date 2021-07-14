var express = require('express');
const { post } = require('../server');
const Post = require('../models/post');
// home 

module.exports = (app) => {
<<<<<<< HEAD
    // CREATE
=======
    // // CREATE
>>>>>>> 01fce7e5e86eb96b10dbc2ac5c4a203fdfc12931
    // app.get('/', (req, res) => {
    //     res.render('home');
    // })

    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    })
    app.post('/posts/new', (req, res) => {
        const post = new Post(req.body);

        post.save(() => res.redirect('/'))
    })

    app.get('/', (req, res) => {
<<<<<<< HEAD
        post.find({}).lean()
=======
        Post.find({}).lean()
>>>>>>> 01fce7e5e86eb96b10dbc2ac5c4a203fdfc12931
            .then((posts) => res.render('posts-index', { posts }))
            .catch((err) => {
                console.log(err.message);
            })
    })
};