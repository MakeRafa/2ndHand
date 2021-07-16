require('dotenv').config();
const express = require('express')
const port = 3000

const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const checkAuth = require('./middleware/checkAuth');

const app = express()

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('method'))
app.use(cookieParser());
app.use(checkAuth);
// db
require('./data/secondHand-db');
require('./routes/posts.js')(app);
require('./routes/auth.js')(app);

module.exports = app;

app.listen(port, () => {
    console.log(`2ndHand listening at http://localhost:${port}`)
})

