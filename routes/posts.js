var express = require('express');
// const { post } = require('../server');
const Post = require('../models/post');
const User = require('../models/user');
// home 

module.exports = (app) => {

    // HOME
    app.get('/', (req, res) => {
        const { user } = req;
        const currentUser = req.user;
        console.log(req.cookies);
        Post.find({}).lean().populate('creator')
            .then((posts) => res.render('home', { posts, currentUser, user }))
            .catch((err) => {
                console.log(err.message);
            });
    });

    // POST
    app.post('/posts/new', (req, res) => {
        if (req.user) {
            const userId = req.user._id;
            const post = new Post(req.body);
            post.creator = userId;

            post
                .save()
                .then(() => User.findById(userId))
                .then((user) => {
                    user.posts.unshift(post);
                    user.save();
                    // REDIRECT TO THE NEW POST
                    return res.redirect(`/posts/${post._id}`);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            return res.status(401); // UNAUTHORIZED
        }
    });

    // NEW
    app.get('/posts/new', (req, res) => {
        const currentUser = req.user;
        res.render('posts-new', { currentUser });
    })

    //Show All
    app.get('/posts-index', (req, res) => {
        const currentUser = req.user;

        Post.find({}).lean()
            .then((posts) => res.render('posts-index', { posts, currentUser }))
            .catch((err) => {
                console.log(err.message);
            })
    })

    // SHOW
    app.get('/posts/:id', (req, res) => {
        const currentUser = req.user;

        Post.findById(req.params.id).lean().populate('creator')
            .then((post) => res.render('posts-show', { post, currentUser }))
            .catch((err) => {
                console.log(err.message);
            });
    });

    // EDIT
    app.get('/posts/:id/edit', (req, res) => {
        Post.findById(req.params.id, function (err, post) {
            res.render('posts-edit', { currentUser });
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

    app.get('/profile', (req,res) => {
        // const currentUser = req.user;

        res.render('profile', {title: 'profile', user: req.user})
    })

};