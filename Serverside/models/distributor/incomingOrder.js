const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const inorderdistributorSchema = mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pharmacistName:{
        type:String,
        required:true
    },
    issueDate:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }

},{
    collection: 'inorderdistributor'
});
const inorders = module.exports = mongoose.model('inorders', inorderdistributorSchema);
