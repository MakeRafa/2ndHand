const User = require('../models/user');

module.exports = (app) => {

    app.get('/login', (req, res) => res.render('login'));
    
    app.get('/signup', (req, res) => res.render('signup'));

    app.post('/signup', (req, res) => {
        const user = new User(req.body);
        user.save().then(()=>res.redirect('/'))
        .catch((err)=>{
            console.log(err.message)
        })
    })
}
