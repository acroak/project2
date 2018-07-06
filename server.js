const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';


// GET INDEX
app.get('/', (req,res)=>{
  res.render('index.ejs');
});

app.get('/house-plants',(req,res)=>{
  res.render('all_plants.ejs');
});

app.get('/house-plants/new',(req,res)=>{
  res.render('new.ejs');
})
app.get('/house-plants/:id', (req,res)=>{
  res.render('show.ejs');
});

app.get('/house-plants/:id/edit',(req,res)=>{
  res.render('edit.ejs');
});




// CONNECTIONS
app.listen(port, ()=>{
  console.log('Listening...');
});

mongoose.connect(mongoUri, {useNewUrlParser: true});
mongoose.connection.on('open', ()=>{
  console.log('mongoose!!!!!!!!!!!!!!!!!!!!');
});
