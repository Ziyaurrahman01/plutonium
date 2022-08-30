const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route.js')
const app = express()
const { default: mongoose } = require('mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use('/', route)

mongoose.connect("mongodb+srv://ziyaurrahman:google79821@cluster0.xuxdo5g.mongodb.net/middleware2")
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err))

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running in port "+ (process.env.PORT || 3000));
})