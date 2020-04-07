const mongoose = require('mongoose');

const subOrderSchema = mongoose.Schema({
   
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
    }
    
});
const subOrders = module.exports = mongoose.model('subOrders', subOrderSchema);
