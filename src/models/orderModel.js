const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    "userId" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Middleuser'
    },
    "productId" : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Middleproduct'
    },
    "amount" : Number,
    "date" : String,
    "isFreeAppUser" : Boolean
}, {timestamps : true})

module.exports = mongoose.model('Middleorder', orderSchema)