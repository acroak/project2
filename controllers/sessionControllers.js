const express = require('express');
const router = express.Router();
const User = require('../models/userModels.js');
const bcrypt = require('bcrypt');

//Log in New SESSION
router.get('/new',(req,res)=>{
  res.render('sessions/newsession.ejs');
});

//Log Off
router.delete('/', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
});

//Check Password
router.post('/', (req, res)=>{
    User.findOne({ username: req.body.username },(err, foundUser) => {
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentUser = foundUser;
            res.redirect('/');
        } else {
            res.send('wrong password');
        }
    });
});

module.exports = router;
