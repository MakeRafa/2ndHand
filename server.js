const express = require('express')
const app = express()
const port = 3000
    // const hbs = require('express-handlebars');
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/posts/new', (req, res) => {
    res.render('posts-new');
})

require('./data/secondHand-db');

app.listen(port, () => {
    console.log(`2ndHand listening at http://localhost:${port}`)
})