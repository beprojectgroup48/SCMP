const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");



const app = express();

// route
var route = require('./routes/route');
var registerroute = require('./routes/register');
//var login = require('./routes/login');

//connect to the mongodb
mongoose.connect('mongodb://localhost:27017/scmp');

mongoose.connection.on('connected' , ()=>{
    console.log("connection established");
})

// on connection error
mongoose.connection.on('error' , (err)=>{
    console.log(err);
})

// add some middleware 

app.use(cors());

// use the body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', route);
app.use('/register', registerroute);
//app.use('/login', login);
const port = 3000;

app.listen(port, () => {
   console.log("server is listening to the port number " + port);
});