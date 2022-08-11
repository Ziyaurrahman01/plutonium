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
    res.send(movies);
});

router.get("/movies/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    let ourmovie = movies[movieIndex]
    res.send(ourmovie)
});


router.get("/moviesv/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber

    if (movieIndex < 0 || movieIndex >= movies.length) {
        return req.send('invalid input try again')
    }
    let ourmovie = movies[movieIndex]
    res.send(ourmovie)
});

router.get("/films", function(req, res){
   const films =  [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(films)
       
})
router.get("/films/:filmId", function(req, res){
   const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
      
       let filmId = req.params.filmId
       for(let i = 0; i< films.length; i++){
        let film = films[i]
        if(film.id == filmId){
            return res.send(film)
        }
       }
       res.send("invaild film id")
})
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]

    router.post('/players', function (req, res) {
    
        let newPlayer = req.body
        let newPlayersName = newPlayer.name
        let isNameRepeated = false
    
        
    
        for(let i = 0; i < players.length; i++) {
            if(players[i].name == newPlayersName) {
                isNameRepeated = true;
                break;
            }
        }
    
        if (isNameRepeated) {
            //Player exists
            res.send("This player was already added!")
        } else {
            //New entry
            players.push(newPlayer)
            res.send(players)
        }
    });
    
module.exports = router;
// adding this comment for no reason