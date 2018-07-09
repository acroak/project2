const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const plantSchema = new Schema(
  {
    name: String,
    sciname: String,
    img: String,
    diff: Number,
    sun: [String],
    tags:[String],
    poisonous: Boolean,
    description:[String]

  }

);
const Plants = mongoose.model('Plants', plantSchema);
module.exports = Plants;
