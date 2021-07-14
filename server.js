const express = require('express')
const app = express()
const port = 3000
    // const hbs = require('express-handlebars');
const exphbs = require('express-handlebars');

// middleware 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


require('./routes/posts.js')(app);

app.listen(port, () => {
    console.log(`2ndHand listening at http://localhost:${port}`)
})

module.exports = app;