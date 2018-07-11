//**********************************Dependencies********************************
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/plantshop_app_dev';

const methodOverride = require('method-override');

const session = require('express-session');

const bcrypt = require('bcrypt');

const db = mongoose.connection



//***************************Schema Dependencies********************************
const Plants = require('./models/plantModel.js');
const seed = require('./models/seed.js');

const User = require('./models/userModels.js');
const userSeed = require('./models/userSeed.js');

//*********************************Middleware***********************************
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(session({
  secret: "feedmeseymour", //some random string
  resave: false,
  saveUninitialized: false
}));


//*********************************Controllers**********************************
const plantsController = require("./controllers/plants.js");
app.use("/plants", plantsController);

const userController = require('./controllers/userControllers.js')
app.use('/users', userController);

const sessionController = require('./controllers/sessionControllers.js')
app.use('/sessions', sessionController);


//************************************GET************************************
// REDIRECT TO INDEX
app.get('/',(req,res)=>{
  res.redirect('/plants')
});

// GET INDEX
app.get('/plants', (req,res)=>{
  Plants.find({},(err, allPlants)=>{
    res.render('index.ejs',{
      currentUser: req.session.currentUser,
      Plants: allPlants

    });
  }).sort({name: 1})
});

//******************************SEED THE DATABASE*******************************
app.get('/databaseSeed',(req,res)=>{
  Plants.create(seed, (err, createdPlants)=>{
    console.log(createdPlants);
    res.redirect('/');
  });
});
//*******************************SEED THE ADMINS********************************
app.get('/adminSeed',(req,res)=>{
  userSeed.forEach((User) => {
    User.password = bcrypt.hashSync(User.password, bcrypt.genSaltSync(10));
  });
  User.create(userSeed, (err, createdAdmin)=>{
    console.log(createdAdmin);
    res.redirect('/');
  });
});

// CONNECTIONS
app.listen(port, ()=>{
  console.log('Listening...');
});

mongoose.connect(mongoUri, {useNewUrlParser: true});
mongoose.connection.on('open', ()=>{
  console.log('mongoose!!!!!!!!!!!!!!!!!!!!');
});
//*******************************SEARCH BAR********************************

// db.plants.createIndex({
//     title: 'text',
//     description: 'text',
//     sun: 'text',
//     tags: 'text'
// });

// xxxxxx
