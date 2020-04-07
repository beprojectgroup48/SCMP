const express = require('express');
var router = express.Router();
var licenceInfo = require('../models/licenceInfo');
var url = require('url');

router.get('/verify', (req, res)=>{
    licenceInfo.getUserByRegistrationId(req.query.id, (err, verificationStatus) =>{
        if(verificationStatus.length){
            res.json({msg: "1"});
        }else {
            res.json({msg: "2"});
        }
    })
})
module.exports = router;