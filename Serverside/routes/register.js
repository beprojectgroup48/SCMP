const express = require('express');
const Verifier = require("email-verifier");


var router = express.Router();

const Manufacturer = require('../models/manufacturer/manufacturermodel');
const Distributor = require('../models/distributor/distributormodel');
const Pharmacist = require('../models/pharmacist/pharmacistmodel');


var sendMail = require('../sendEmail');


router.post('/manufacturer', (req, res )=>{
    console.log('inside manufacturer');
    let manufacturer = new Manufacturer ({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        transportAgency:req.body.transportAgency,
        modeOfTransport:req.body.modeOfTransport,
        location:req.body.location,
        registrationId:req.body.registrationId
    });
    let verifier = new Verifier("at_FtKw8OIeUMOt28MavpT4zdXnLFJiZ");
    verifier.verify(req.body.email,{ hardRefresh: true }, (err, data) => {
        if (err){
            throw err;
            
        }else{
            console.log(data.smtpCheck);
            if(data.smtpCheck == 'true'){
                
                Manufacturer.addManufacturer(manufacturer,(err, manufacturer) => {
                    if(err){
                        console.log(err);
                        res.json(err);
                        
                    }else{
                        res.json(manufacturer);
                    }
                });
                sendMail.sendmail(req);
            }else{
                res.json({errorMessage: "incoorect email address"});
            }
        }
    });
});

router.post('/distributor', (req, res )=>{
    let distributor = new Distributor ({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        registrationId:req.body.registrationId
    });
    let verifier = new Verifier("at_FtKw8OIeUMOt28MavpT4zdXnLFJiZ");
    verifier.verify(req.body.email,{ hardRefresh: true }, (err, data) => {
        if (err){
            throw err;
            
        }else{
            console.log(data.smtpCheck);
            if(data.smtpCheck == 'true'){
                
                Distributor.addDistributor(distributor, (err, distributor) => {
                    if(err){
                        console.log(err);
                        res.json(err);
                    }else{
                        res.json({msg: 'register successfully'});
                    }
                });
                
                sendMail.sendmail(req);
            }else{
                res.json({errorMessage: 'incorrect email address'}); 
            }
            
        }
        
    });
    
});

router.post('/pharmacist', (req, res )=>{
    let pharmacist = new Pharmacist ({
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        location:req.body.location,
        registrationId:req.body.registrationId
    });
    
    let verifier = new Verifier("at_FtKw8OIeUMOt28MavpT4zdXnLFJiZ");
    verifier.verify(req.body.email,{ hardRefresh: true }, (err, data) => {
        if (err){
            throw err;
            
        }else{
            console.log(data.smtpCheck);
            if(data.smtpCheck == 'true'){
                Pharmacist.addPharmacist(pharmacist, (err, pharmacist) => {
                    if(err){
                        res.json(err);
                    }else{
                        res.json({msg: 'register successfully'});
                    }
                });
                sendMail.sendmail(req);
            }else{
                res.json({errorMessage: 'incorrect email address'}); 
            }
            
        }
        
    });
    
    
    
});


module.exports = router;