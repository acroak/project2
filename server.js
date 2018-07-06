const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';



app.get('/', (req,res)=>{
  res.render('index.ejs');
});

app.listen(port, ()=>{
  console.log('Listening...');
});

mongoose.connect(mongoUri, {useNewUrlParser: true});
mongoose.connection.on('open', ()=>{
  console.log('mongoose!!!!!!!!!!!!!!!!!!!!');
});
