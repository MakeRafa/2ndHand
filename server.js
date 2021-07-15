const express = require('express')
const port = 3000
    // const hbs = require('express-handlebars');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
// middleware 

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

// db
require('./data/secondHand-db');

require('./routes/posts')(app);
require('./routes/auth')(app);

app.listen(port, () => {
    console.log(`2ndHand listening at http://localhost:${port}`)
})

module.exports = app;