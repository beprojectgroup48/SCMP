const express = require('express');
var router = express.Router();
var completeOrder = require('../models/distributor/complete-order');
var subOrder = require('../models/distributor/sub-order');
const manufacturers = require('../models/manufacturer/manufacturermodel');
const pharmacists = require('../models/pharmacist/pharmacistmodel');
const incomingOrders = require('../models/distributor/incoming-order');
const outgoingOrders = require('../models/distributor/outgoing-order');

router.get('/allmanufacturers', (req, res)=>{
    manufacturers.find((err, listOfManufacturers)=>{
        if(err){
            console.log('error in retrieving manufacturers ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json(listOfManufacturers);
        }
    })
})
router.get('/allpharmacists', (req, res)=>{
    pharmacists.find((err, listOfPharmacists)=>{
        if(err){
            console.log('error in retrieving pharmacists ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json(listOfPharmacists);
        }
    })
})
router.post('/placeOrder', (req, res)=>{

    let subOrder = new subOrder({
        productNam
    })
    let order = new completeOrder ({
        orderId: req.body.orderId,
      //  email: req.body.email,
      /*  productName:req.body.productName,
        quantity: req.body.quantity,
        unitamount: req.body.unitamount,
        manufacturerName:req.body.manufacturerName,*/
        subOrders: req.body.orders,
        issueDate: req.body.issueDate,
        deliveryDate: req.body.deliveryDate,
        totalAmount:req.body.totalAmount
    });
    
    completeOrder.placeOrder(order, (err, confirmOrder)=>{
        if(err){
            console.log('error '+ JSON.stringify(err));
        }else{
            console.log('order placed ' + confirmOrder);
        }
    })
})

router.get('/allIncomingOrders', (req, res)=>{
    
    incomingOrders.find({}, {orderId:1, pharmacistName:1, issueDate:1, deliveryDate:1, totalAmount:1, status:1}, (err, listOfIncomingOrders)=>{
        if(err){
            console.log('error in retrieving incoming orders ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json(listOfIncomingOrders);
        }
    })
})

router.get('/allOutgoingOrders', (req, res)=>{
    outgoingOrders.find({}, {orderId:1, manufacturerName:1, issueDate:1, deliveryDate:1, totalAmount:1, status:1}, (err, listOfOutgoingOrders)=>{
        if(err){
            console.log('error in retrieving outgoing orders ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json(listOfOutgoingOrders);
        }
    })
})
module.exports = router;