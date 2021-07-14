var express = require('express');
const Post = require('../models/post');
// home 

module.exports = (app) => {
    // CREATE
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    })
    app.post('/posts/new', (req, res) =>{
        const post = new Post(req.body);

        post.save(() => res.redirect('/post-index'))
    })
};