const mongoose = require('mongoose');
const subOrders = require('./sub-order');

const orderdistributorSchema = mongoose.Schema({
    orderId:{
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
    subOrders:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: subOrders 
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }

},{
    collection: 'orderdistributor'
});
const orders = module.exports = mongoose.model('orders', orderdistributorSchema);


module.exports.getOrderById = function(id, callback){
    orders.findById(id, callback);
}

module.exports.getOrdersFromPharmacists = function(username, callback){
}

module.exports.placeOrder = function(order, callback){
    order.save(callback);
}

/*module.exports.getAllManufacturers = function(callback){
    manufacturers.find((err, listOfManufacturers)=>{
        if(err){
            console.log('error in retrieving manufacturers ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.send(listOfManufacturers);
        }
    })
}
module.exports.getAllPhamacists = function(callback){
    pharmacists.find((err, listOfPharmacists)=>{
        if(err){
            console.log('error in retrieving pharmacists ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.send(listOfPharmacists);
        }
    })
}
*/
