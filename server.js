const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/plantshop_app_dev';

const methodOverride = require('method-override');

const session = require('express-session');

//Requires Schemas
const User = require('./models/userModels.js');
const Plants = require('./models/plantModel.js');

// MIDDLEWARE
// body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// static files middleware
app.use(express.static('public'))
//method override MIDDLEWARE
app.use(methodOverride('_method'));
//Sessions MIDDLEWARE
app.use(session({
  secret: "feedmeseymour", //some random string
  resave: false,
  saveUninitialized: false
}));


//CONTROLLERS
const userController = require('./controllers/userControllers.js')
app.use('/users', userController);

const sessionController = require('./controllers/sessionControllers.js')
app.use('/sessions', sessionController);


// GET INDEX
app.get('/', (req,res)=>{
  Plants.find({}, (err, allPlants)=>{
    res.render('index.ejs',{
      currentUser: req.session.currentUser,
      Plants: allPlants
    });
  })
});


app.get('/house-plants',(req,res)=>{
  res.render('all_plants.ejs',{
    currentUser: req.session.currentUser,
  });
});

app.get('/house-plants/new',(req,res)=>{
  res.render('new.ejs',{
    currentUser: req.session.currentUser,
  });
});

app.post('/house-plants/', (req,res)=>{
  Plants.create(req.body, (error, createdPlant)=>{
    res.redirect('/');
  });

});

app.get('/house-plants/:id', (req,res)=>{
  Plants.findByID(req.params.id, (err, foundPlant)=>{
    res.render('show.ejs',{
      currentUser: req.session.currentUser,
      plant: foundPlant
    });
  })
});
//************************************DELETE************************************
app.delete('/house-plants/:id', (req, res) => {
	Plants.remove({_id: req.params.id}, (err, plant)=>{
    console.log(plant);
    res.redirect('/house-plants');
  }); //remove the item from the array
});

//*************************************EDIT*************************************
app.get('/house-plants/:id/edit',(req,res)=>{
  res.render('edit.ejs', {
    currentUser: req.session.currentUser,
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
