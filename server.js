// require('dotenv').config()
// const hbs = require('express-handlebars');

var express = require('express');
var exphbs  = require('express-handlebars');

// const cookieParser = require('cookie-parser');

//APP SETUP
var app = express();


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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static('public'));


// module.exports = app;

// Start Server
app.listen(3000, () => {
    console.log('2ndHand listening on port localhost:3000!');
});
