const express = require('express');
var router = express.Router();
const manufacturers = require('../models/manufacturer/manufacturermodel');
const distributors = require('../models/distributor/distributormodel');
const pharmacists = require('../models/pharmacist/pharmacistmodel');

const jwt = require('jsonwebtoken');
const config = require('../config/database');
router.post('/manufacturer', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

  manufacturers.getManufacturerByUsername(username, (err, manufacturer) => {
    if(err) throw err;
    if(!manufacturer){
      return res.json({success: false, msg: 'User not found'});
    }

    manufacturers.comparePassword(password, manufacturer.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(manufacturer.toJSON(),config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          manufacturer: {
            id: manufacturer._id,
            name: manufacturer.name,
            username: manufacturer.username
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });

})

router.post('/distributor', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    distributors.getDistributorByUsername(username, (err, distributor) => {
    if(err) throw err;
    if(!distributor){
      return res.json({success: false, msg: 'User not found'});
    }

    distributors.comparePassword(password, distributor.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(distributor.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          distributor: {
            id: distributor._id,
            name: distributor.name,
            username: distributor.username
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });

})

router.post('/pharmacist', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    pharmacists.getPharmacistByUsername(username, (err, pharmacist) => {
    if(err) throw err;
    if(!pharmacist){
      return res.json({success: false, msg: 'User not found'});
    }

    pharmacists.comparePassword(password, pharmacist.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(pharmacist.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          pharmacist: {
            id: pharmacist._id,
            name: pharmacist.name,
            username: pharmacist.username
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });

})


module.exports = router;