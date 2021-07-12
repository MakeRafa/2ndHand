
var express = require('express');
var exphbs  = require('express-handlebars');

//APP SETUP
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start Server
app.listen(3000, () => {
    console.log('2ndHand listening on port localhost:3000!');
});
