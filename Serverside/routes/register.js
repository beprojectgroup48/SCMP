const express = require('express');

var router = express.Router();

const Manufacturer = require('../models/manufacturer');
const Distributor = require('../models/distributor');
const Pharmacist = require('../models/pharmacist');
const Customer = require('../models/customer');

var sendMail = require('../sendEmail');

router.post('/manufacturer', (req, res )=>{
    let manufacturer = new Manufacturer ({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        transportAgency:req.body.transportAgency,
        modeOfTransport:req.body.modeOfTransport,
        formType: req.body.formType,
        location:req.body.location,
        licenceNumber:req.body.licenceNumber
    });
    
    manufacturer.save((err, manufacturer) => {
        if(err){
            console.log(err);
            res.json(err);
           
        }else{
            res.json(manufacturer);
        }
    });
    
    sendMail.sendmail(req);
});

router.post('/distributor', (req, res )=>{
    let distributor = new Distributor ({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        licenceNumber:req.body.licenceNumber
    });

    distributor.save((err, distributor) => {
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json({msg: 'register successfully'});
        }
    });

    sendMail.sendmail(req);
   
});

router.post('/pharmacist', (req, res )=>{
    let pharmacist = new Pharmacist ({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        location:req.body.location,
        licenceNumber:req.body.licenceNumber
    });

    pharmacist.save((err, pharmacist) => {
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json({msg: 'register successfully'});
        }
    });

    sendMail.sendmail(req);
});

router.post('/customer', (req, res )=>{
    let customer = new Customer ({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        address:req.body.address
    });

    customer.save((err, customer) => {
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json({msg: 'register successfully'});
        }
    });
    sendMail.sendmail(req);
});


module.exports = router;