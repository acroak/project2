const express = require('express');
const app = express();


app.get('/', (req,res)=>{
  res.send('sever is running');
});
app.listen(3000, ()=>{
  console.log('Listening...');
});
