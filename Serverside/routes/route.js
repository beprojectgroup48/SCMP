    const express = require('express');
    var router = express.Router();

const Manufacturer = require('../models/manufacturer');
const Distributor = require('../models/distributor');
const Pharmacist = require('../models/pharmacist');
const Customer = require('../models/customer');

    router.post('/register/manufacturer', (req, res )=>{
        let manufacturer = new Manufacturer ({
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
    });

    router.post('/register/distributor', (req, res )=>{
        let distributor = new Distributor ({
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
    });

    router.post('/register/pharmacist', (req, res )=>{
        let pharmacist = new Pharmacist ({
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
    });

    router.post('/register/customer', (req, res )=>{
        let customer = new Customer ({
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
    });


    module.exports = router;