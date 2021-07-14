var express = require('express');
// home 

module.exports = (app) => {
    // CREATE
    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    })
    app.get('/', (req, res) => {
        res.render('home');
    });
};