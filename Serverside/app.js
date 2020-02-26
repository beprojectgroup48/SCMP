const express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

const app = express();

// route
var route = require('./routes/route');

//connect to the mongodb
mongoose.connect('mongodb://localhost:27017/SCMP');

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
app.use(bodyParser.json());

app.use('/' , route);

const port = 3000;

app.listen(port, () => {
   console.log("server is listening to the port number " + port);
});