require('dotenv').config()

var express = require('express');
var exphbs = require('express-handlebars');

// const cookieParser = require('cookie-parser');

//APP SETUP
var app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Add this after you initialize express.
// app.use(cookieParser());
<<<<<<< HEAD
=======

app.use(checkAuth);
>>>>>>> 295bf350ba906fa2f695992218e7a890aacb0724

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));


module.exports = app;

// Start Server
app.listen(3000, () => {
    console.log('2ndHand listening on port localhost:3000!');
<<<<<<< HEAD
});
=======
});
>>>>>>> 295bf350ba906fa2f695992218e7a890aacb0724
