const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    "name" : String,
    "age" : Number,
    "address" : String,
    "balance" : {
        type : Number,
        default : 100
    },
    "gender" : {
        type : String,
        enum : ["male", "female", "other"]
    },
    "isFreeAppUser" : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})

module.exports = mongoose.model('Middleuser', userSchema)