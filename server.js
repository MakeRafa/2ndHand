// require('dotenv').config()
// const hbs = require('express-handlebars');

// var express = require('express');
// var exphbs = require('express-handlebars');

// // const cookieParser = require('cookie-parser');

// // const checkAuth = require('./middleware/checkAuth');
// //APP SETUP
// var app = express();


// app.engine('hbs', exphbs());
// app.set('view engine', 'hbs');

// // app.engine('hbs', hbs({
// //     layoutsDir: __dirname + '/views',
// //     // partialsDir: path.join(__dirname, 'views/partials'),
// //     defaultLayout: 'index',
// //     extname: 'hbs'
// // }));
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'hbs');
// // Add this after you initialize express.
// // app.use(cookieParser());

// // app.use(checkAuth);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(express.static('public'));


// module.exports = app;

// // Start Server
// app.listen(3000, () => {
//     console.log('2ndHand listening on port localhost:3000!');
// });

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


app.listen(port, () => {
    console.log(`2ndHand listening at http://localhost:${port}`)
})