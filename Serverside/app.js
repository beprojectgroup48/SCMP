const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('./config/database');
//const passport = require('./config/passport');

const app = express();

// route
var route = require('./routes/route');
var registerroute = require('./routes/register');
var loginroute = require('./routes/login');
var manufacturerroute = require('./routes/manufacturer');
var distributorroute = require('./routes/distributor');
//connect to the mongodb
mongoose.connect(config.urldb);

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
app.use('/login', loginroute);
app.use('/distributor', distributorroute);
//app.use('/manufacturer', manufacturerroute);

const port = 3000;

app.listen(port, () => {
   console.log("server is listening to the port number " + port);
});