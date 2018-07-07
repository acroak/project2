const express = require('express');
const router = express.Router();
const User = require('../models/userModels.js');
const bcrypt = require('bcrypt');

router.get('/new', (req,res)=>{
  //local/users/new
  res.render('users/users.ejs');
});

//encrpt password, redirect home
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    console.log(req.body.password);
    User.create(req.body, (err, createdUser)=>{
        res.redirect('/');
    });
});
module.exports = router;
