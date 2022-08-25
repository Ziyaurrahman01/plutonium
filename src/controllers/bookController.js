const NewauthorModel = require("../models/NewauthorModel")
const NewbookModel= require("../models/NewbookModel")
const NewPublisherModel= require("../models/NewPublisherModel")
let mongoose = require('mongoose');

//Problem No. 3
const createBook = async function (req, res) {
       let book = req.body
    let author1= book.author
    let Publisher1 = book.Publisher
    let isValid = mongoose.Types.ObjectId.isValid(author1)
    let isValidp =  mongoose.Types.ObjectId.isValid(Publisher1)
    if(isValid === false){
        return res.send("invalid length of author")}
       
     else if(isValidp === false){
       return  res.send("invalid length of Publisher id")
    }
    
 let idfromauthor = await NewauthorModel.findById(author1)
 let idfromPublisher = await NewPublisherModel.findById(Publisher1)

  if(!idfromauthor){
    return req.send("this author don't exist")
 } else if(!idfromPublisher){
    return req.send("this Publisher don't exist")
 }
        else if(!idfromauthor && !idfromPublisher){
            return req.send("author and publisher both id's are invalid, please try with valid id ")
   }else {
    let bookCreated = await NewbookModel.create(book)
    res.send({data: bookCreated})
}}

// Problem No. 4.
const getBooksData= async function (req, res) {
    let books = await NewbookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

// Prob No. 5.
const getBooksWithAuthorDetails = async function (req, res) {
    let data = await NewPublisherModel.find({name: ["Penguin","HarpurCollins"]}).select({_id: 1})
    let bookid = await NewbookModel.updateMany({Publisher: data},{$set : {isHardCover: true , new: true}},{upset : true})
    let authorIds= await NewauthorModel.find({ ratings: {$gt:3.5 }}).select({_id : 1})
    let rating1 = await NewbookModel.find({author : authorIds},{$inc : {price: 10 }},{upset : true})
    res.send({data: bookid , rating1})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails