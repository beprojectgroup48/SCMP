const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const outorderdistributorSchema = mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
    manufacturerName:{
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
    collection: 'outorderdistributor'
});
const outorders = module.exports = mongoose.model('outorders', outorderdistributorSchema);
