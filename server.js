const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/plantshop_app_dev';

const methodOverride = require('method-override');

const session = require('express-session');

const bcrypt = require('bcrypt');

//Requires Schemas
const User = require('./models/userModels.js');
const Plants = require('./models/plantModel.js');
const seed = require('./models/seed.js');
const userSeed = require('./models/userSeed.js');

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

//************************************GET************************************
app.get('/',(req,res)=>{
  res.redirect('/plants')
});

// GET INDEX
app.get('/plants', (req,res)=>{
  Plants.find({}, (err, allPlants)=>{
    res.render('index.ejs',{
      currentUser: req.session.currentUser,
      Plants: allPlants
    });
  })
});
// GET HERBS ONLY
app.get('/herbs',(req,res)=>{
  Plants.find({tags: {$in: ['herb']}}, (err, Plants)=>{
    res.render('herbs.ejs',{
      currentUser: req.session.currentUser,
      Plants: Plants
    });
  })
});
// GET HOUSEPLANTS ONLY
app.get('/house-plants',(req,res)=>{
    Plants.find({tags: {$in: ['house plant']}}, (err, Plants)=>{
      res.render('houseplants.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//full sun
app.get('/full-sun',(req,res)=>{
    Plants.find({sun: {$in: ['full sun']}}, (err, Plants)=>{
      res.render('houseplants.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//partial sun/Shade
app.get('/partial',(req,res)=>{
    Plants.find({sun: {$in: ['partial sun','partial shade']}}, (err, Plants)=>{
      res.render('houseplants.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//full Shade
app.get('/full-shade',(req,res)=>{
    Plants.find({sun: {$in: ['full shade']}}, (err, Plants)=>{
      res.render('houseplants.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//EASY TO GROW
app.get('/easy-plants',(req,res)=>{
    Plants.find({tags: {$in: ['easy']}}, (err, Plants)=>{
      res.render('houseplants.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//MODERATE TO GROW
app.get('/moderate-plants',(req,res)=>{
    Plants.find({tags: {$in: ['moderate']}}, (err, Plants)=>{
      res.render('houseplants.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//HARD TO GROW
app.get('/hard-plants',(req,res)=>{
    Plants.find({tags: {$in: ['hard']}}, (err, Plants)=>{
      res.render('houseplants.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//*************************************NEW**************************************
app.get('/plants/new',(req,res)=>{
  res.render('new.ejs',{
    currentUser: req.session.currentUser,
  });
});

app.post('/plants/', (req,res)=>{
  if(req.body.poisonous === 'on'){
        req.body.poisonous = true;
    } else {
        req.body.poisonous = false;
    }
  Plants.create(req.body, (error, createdPlant)=>{
    res.redirect('/');
  });

});

//************************************GET BY ID************************************
app.get('/plants/:id', (req,res)=>{
  Plants.findById(req.params.id, (err, foundPlant)=>{
    res.render('show.ejs',{
      Plant: foundPlant,
      currentUser: req.session.currentUser

    });
  })
});
//************************************DELETE************************************
app.delete('/plants/:id', (req, res) => {
	Plants.remove({_id: req.params.id}, (err, plant)=>{
    console.log(plant);
    res.redirect('/');
  }); //remove the item from the array
});

//*************************************EDIT*************************************
app.get('/plants/:id/edit',(req,res)=>{
  Plants.findById({_id: req.params.id}, (err, plant)=>{
    res.render('edit.ejs', {
      currentUser: req.session.currentUser,
      plant: plant
    });
  });
});
//**************************************PUT*************************************
//===put the newly updated information into the model
app.put('/plants/:id', (req, res)=>{
    Plants.findByIdAndUpdate(req.params.id, req.body,  (err, updatedModel)=>{
          res.redirect('/');
      });
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

// xxxxxx
