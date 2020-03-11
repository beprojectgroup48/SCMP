const express = require('express');
var router = express.Router();
var Order = require('../models/distributor/order');
const manufacturers = require('../models/manufacturer/manufacturermodel');
const pharmacists = require('../models/pharmacist/pharmacistmodel');

router.get('/allmanufacturers', (req, res)=>{
    console.log('inside manufacturer');
    manufacturers.find((err, listOfManufacturers)=>{
        if(err){
            console.log('error in retrieving manufacturers ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.send(listOfManufacturers);
        }
    })
})
router.get('/allpharmacists', (req, res)=>{
    pharmacists.find({}, {_id:1, name:1, mobileNumber:1, location:1, licenceNumber:1}, (err, listOfPharmacists)=>{
        if(err){
            console.log('error in retrieving pharmacists ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.send(listOfPharmacists);
        }
    })
})
router.post('/placeorder', (req, res)=>{
    let order = new Order ({
        orderId: req.body.orderId,
        email: req.body.email,
        productName:req.body.productName,
        quantity: req.body.quantity,
        unitamount: req.body.unitamount,
        manufacturerName:req.body.manufacturerName,
        deliveryDate: req.body.deliveryDate,
        location:req.body.location,
        totalAmount:req.body.totalAmount
    });

    Order.placeOrder(order, (err, confirmOrder)=>{
        if(err){
            console.log('error '+ JSON.stringify(err));
        }else{
            console.log('order placed ' + confirmOrder);
        }
    })
})
module.exports = router;