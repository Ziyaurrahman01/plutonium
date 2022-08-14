const express = require('express');

var bodyParser = require('body-parser');

const route = require('./routes/route.js');
 const mongoose = require('mongoose')
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://ziyaurrahman:google79821@cluster0.xuxdo5g.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlparser:true
})
.then(() => console.log("MongoDb is connected"))
.catch(err =>console.log(err))
app.use('/', route);

app.listen(process.env.PORT || 3002, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
});
