const express = require('express');

var router = express.Router();

const Manufacturer = require('../models/manufacturer/manufacturermodel');
const Distributor = require('../models/distributor/distributormodel');
const Pharmacist = require('../models/pharmacist/pharmacistmodel');
const Customer = require('../models/customer/customermodel');

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
    
    Manufacturer.addManufacturer(manufacturer,(err, manufacturer) => {
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

    Distributor.addDistributor(distributor, (err, distributor) => {
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

    Pharmacist.addPharmacist(pharmacist, (err, pharmacist) => {
        if(err){
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

    Customer.addCustomer(customer, (err, customer) => {
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