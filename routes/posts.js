var express = require('express');
// const { post } = require('../server');
const Post = require('../models/post');
// home 

module.exports = (app) => {
    // NEW
    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    })

    // POST
    app.post('/posts/new', (req, res) => {
        const post = new Post(req.body);

        post.save(() => res.redirect('/'))
    })
    // HOME
    app.get('/', (req, res) => {
        Post.find({}).lean()
            .then((posts) => res.render('posts-index', { posts }))
            .catch((err) => {
                console.log(err.message);
            })
    })

    // SHOW
    app.get('/posts/:id', (req, res) => {
        Post.findById(req.params.id).lean()
            .then((post) => res.render('posts-show', { post }))
            .catch((err) => {
                console.log(err.message);
            });
    });

    // EDIT
    app.get('/posts/:id/edit', (req, res) => {
        Post.findById(req.params.id, function (err, post) {
            res.render('posts-edit');
        })
        .catch(err => {
            console.log(err.message)
        })
    })

    // UPDATE
    app.put('/posts/:id', (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body)
            .then(post => {
                res.redirect(`/posts/${post._id}`)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

};