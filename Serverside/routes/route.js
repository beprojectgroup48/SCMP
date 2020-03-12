const express = require('express');
var router = express.Router();
var licenceInfo = require('../models/licenceInfo');
var url = require('url');

router.post('/verify', (req, res)=>{
    console.log('inside verify');
    licenceInfo.getUserByRegistrationId(req.query.id, (err, verificationStatus) =>{
        console.log(verificationStatus.length)
        if(verificationStatus.length){
            res.json({msg: 'verification successful'});
        }else {
            res.json({msg: "user is not registered with pharmacy"})
        }
    })
})
module.exports = router;