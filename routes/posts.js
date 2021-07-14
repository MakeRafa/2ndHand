var express = require('express');
const { post } = require('../server');
// home 

module.exports = (app) => {
    // CREATE
    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    })
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/posts-page', (req, res) => {
        post.find({}).lean()
            .then((posts) => res.render('posts-index', { posts }))
            .catch((err) => {
                console.log(err.message);
            })
    })
};