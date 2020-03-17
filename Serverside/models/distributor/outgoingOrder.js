const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const outgoingOrderDistributorSchema = mongoose.Schema({
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
    collection: 'outgoingOrderDistributor'
});
const outgoingOrderDistributor = module.exports = mongoose.model('outgoingOrderDistributor', outgoingOrderDistributorSchema);
