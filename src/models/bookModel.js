const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
  bookName: String,
  Price:{
    indianPrice:String,
    eoropeanPrice: String
  }  ,
  Year: Number,
  Tags: [String],
  authorName: String,
  totalPages : Number,
  stockAvailable:Boolean
});
module.exports = mongoose.model('MBook', bookSchema) 

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
