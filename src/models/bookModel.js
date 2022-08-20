const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   name: String,
   author_id:Number,
   price: Number,
   rating: Number
},
 { timestamps: false});


module.exports = mongoose.model('MyBook', bookSchema)
