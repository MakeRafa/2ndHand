var express = require('express');
const { post } = require('../server');
const Post = require('../models/post');
// home 

module.exports = (app) => {
    // // CREATE
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
        Post.find({}).lean()
            .then((posts) => res.render('posts-index', { posts }))
            .catch((err) => {
                console.log(err.message);
            })
    })
};