const express = require('express');
const externalModule = require('../logger/logger')
const myHelper=require("../util/helper")
const stringNew=require("../validator/formatter")
const lodash = require("lodash")
//const lodash = require("lodash")
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send("Welcome to my application. I am Ziyaurrahman khan and a part of FunctionUp Plutonium cohort")
    externalModule.welcome();
    myHelper.date();
    myHelper.month();
    myHelper.batch();
    stringNew.trim();
    stringNew.lower();
    stringNew.upper();
    let month= ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    let result = lodash.chunk(month,3)
    console.log(result);
    
    let oddNum= [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNum))
   });
router.get('/test-me', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
router.get('/movies', function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(movies);
    res.send(movies);
});
router.get("/movies/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    let ourmovie = movies[movieIndex]
    console.log(ourmovie)
    res.send(ourmovie)
});
router.get("/movies/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber

    if (movieIndex < 0 || movieIndex >= movies.length) {
        return req.send('invalid input try again')
    }
    let ourmovie = movies[movieIndex]
    res.send(ourmovie)
module.exports = router;
// adding this comment for no reason