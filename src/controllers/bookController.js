//const { count } = require("console")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let authorId = data.author_id
    if(!authorId){
      return  res.send({msg: "author_id not found ,status: false"})
    }
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}




//Prob. 1
const getBooksData= async function (req, res) {
    let authors = await authorModel.find( {authorName : "chetan bhagat"})
    let bookid = await BookModel.find({author_id :{ $eq : authors[0].author_id}})
    res.send( {msg: bookid})
}

//Prob. 2
const findauthor = async function(req ,res){
    let bookprice = await BookModel.findOneAndUpdate(
        { name: "Two states" }, {price: 100},{new:true}
    )
    let updateprice = bookprice.price;
    let authorupdate = await authorModel.find({author_id: { $eq : bookprice.author_id}}).select({authorName: 1, _id:0}) 
    res.send({msg: authorupdate , updateprice})
}


//Prob. 3
const findBooks = async function(req, res){
    let allBooks = await BookModel.find({ price : { $gte: 50, $lte: 100}})
    let store = allBooks.map( x => x.author_id);
    let NewBooks = await authorModel.find({author_id : store}).select({author_name : 1, _id : 0})
    res.send(NewBooks)
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.findauthor= findauthor
module.exports.findBooks= findBooks
module.exports.createAuthor = createAuthor


//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }
// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }

// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE
