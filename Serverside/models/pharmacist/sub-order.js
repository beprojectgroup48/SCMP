const mongoose = require('mongoose');

const pharmacistSubOrderSchema = mongoose.Schema({
   
    productId:{
        type:Number,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    },
    totalAmount: {
        type: Number,
        required:true
    },
    manufacturerName:{
        type:String,
        required:true
    },
    manufacturerUsername:{
        type:String,
        required:true
    }
    
});
const pharmacistSubOrders = module.exports = mongoose.model('pharmacistSubOrders', pharmacistSubOrderSchema);
