const mongoose = require('mongoose');

const incomingOrderDistributorSchema = mongoose.Schema({
    orderId:{
        type:String,
        required:true
    },
   /* email:{
        type:String,
        required:true
    },*/
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
    collection: 'incomingOrderDistributor'
});
const incomingOrderDistributor = module.exports = mongoose.model('incomingOrderDistributor', incomingOrderDistributorSchema);
