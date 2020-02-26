const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
   

},{
    collection: 'registration'
});


const customers = module.exports = mongoose.model('customers', customerSchema);