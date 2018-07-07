const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const plantSchema = new Schema(
  {
    name: String,
    sciname: String,
    diff: Number,
    sun: [String],
    tags:[String],
    description:[String]

  }

);
const Plants = mongoose.model('Plants', plantSchema);
module.exports = Plants;
