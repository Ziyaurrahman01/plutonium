const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        required: true,
        type: ObjectId,
        ref: "OwnAuthor"
    }, 
    price: Number,
    ratings: Number,
    publisher_id:{
        type:ObjectId,
        ref: "OwnPublisher"
    },
    isHardCover:{
        default:false
    }
}, { timestamps: true });


module.exports = mongoose.model('LibraryBook10', bookSchema)
