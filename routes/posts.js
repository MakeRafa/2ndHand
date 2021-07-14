var express = require('express');
const { post } = require('../server');
const Post = require('../models/post');
// home 

module.exports = (app) => {


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

    app.get('/posts/:id', (req, res) => {
        Post.findById(req.params.id).lean()
            .then((post) => res.render('posts-show', { post }))
            .catch((err) => {
                console.log(err.message);
            });
    });
};