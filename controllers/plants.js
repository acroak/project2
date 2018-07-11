//**********************************Dependencies********************************
const express = require('express');
const router = express.Router();
const Plants = require('../models/plantModel.js');
const seed = require('../models/seed.js');

// GET HOUSEPLANTS ONLY
router.get('/house-plants',(req,res)=>{
    Plants.find({tags: {$in: ['house plant']}}, null, {sort: {name: 1}}, (err, Plants)=>{
      res.render('index.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    });
 });

 // GET HERBS ONLY
 router.get('/herbs',(req,res)=>{
   Plants.find({tags: {$in: ['herb']}}, null, {sort: {name: 1}}, (err, Plants)=>{
     res.render('index.ejs',{
       currentUser: req.session.currentUser,
       Plants: Plants
     });
   });
 });


//full sun
router.get('/full-sun',(req,res)=>{
    Plants.find({sun: {$in: ['full sun']}},null, {sort: {name: 1}}, (err, Plants)=>{
      res.render('index.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    });
});
//partial sun/Shade
router.get('/partial',(req,res)=>{
    Plants.find({sun: {$in: ['partial sun','partial shade']}},null, {sort: {name: 1}}, (err, Plants)=>{
      res.render('index.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    });
});
//full Shade
router.get('/full-shade',(req,res)=>{
    Plants.find({sun: {$in: ['full shade']}},null, {sort: {name: 1}}, (err, Plants)=>{
      res.render('index.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    });
});
//EASY TO GROW
router.get('/easy-plants',(req,res)=>{
    Plants.find({tags: {$in: ['easy']}},null, {sort: {name: 1}}, (err, Plants)=>{
      res.render('index.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//MODERATE TO GROW
router.get('/moderate-plants',(req,res)=>{
    Plants.find({tags: {$in: ['moderate']}},null, {sort: {name: 1}}, (err, Plants)=>{
      res.render('index.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    })

});
//HARD TO GROW
router.get('/hard-plants',(req,res)=>{
    Plants.find({tags: {$in: ['hard']}},null, {sort: {name: 1}}, (err, Plants)=>{
      res.render('index.ejs',{
        currentUser: req.session.currentUser,
        Plants: Plants
      });
    });
});
//*************************************NEW**************************************
router.get('/new',(req,res)=>{
  res.render('new.ejs',{
    currentUser: req.session.currentUser,
  });
});

router.post('/', (req,res)=>{
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
router.get('/:id', (req,res)=>{
  Plants.findById(req.params.id, (err, foundPlant)=>{
    res.render('show.ejs',{
      Plant: foundPlant,
      currentUser: req.session.currentUser

    });
  })
});
//************************************DELETE************************************
router.delete('/:id', (req, res) => {
	Plants.remove({_id: req.params.id}, (err, plant)=>{
    console.log(plant);
    res.redirect('/');
  }); //remove the item from the array
});

//*************************************EDIT*************************************
router.get('/:id/edit',(req,res)=>{
  Plants.findById({_id: req.params.id}, (err, plant)=>{
    res.render('edit.ejs', {
      currentUser: req.session.currentUser,
      plant: plant
    });
  });
});
//**************************************PUT*************************************
//===put the newly updated information into the model
router.put('/:id', (req, res)=>{
    Plants.findByIdAndUpdate(req.params.id, req.body,  (err, updatedModel)=>{
          res.redirect('/');
      });
});

//*************************************EXPORT***********************************
module.exports = router;
