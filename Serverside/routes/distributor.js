const express = require('express');
let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');
let Grid = require('gridfs-stream');
let crypto = require('crypto');
var path = require('path');
const config = require('../config/database');
var router = express.Router();
var completeOrder = require('../models/distributor/complete-order');
var subOrder = require('../models/distributor/sub-order');
const manufacturers = require('../models/manufacturer/manufacturermodel');
const pharmacists = require('../models/pharmacist/pharmacistmodel');
const incomingOrders = require('../models/distributor/incoming-order');
const outgoingOrders = require('../models/distributor/outgoing-order');
const distributor = require('../models/distributor/distributormodel');

const storage = new GridFsStorage({
    
    url: config.urldb,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString("hex") + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
    
});

const upload = multer({
    storage
});

router.post("/upload/:id", upload.single("avatar"), (req, res) => {
    console.log( req.params.id);
    distributor.findByIdAndUpdate({_id: req.params.id}, {image: req.file.filename}, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({filename:req.file.filename});
        }
    })
});

router.get("/image/:filename", (req, res) => {
    const file = gfs.files.findOne({
        filename: req.params.filename
    },(err, file) => {  
        
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: "no files exist"
            });
        }
        if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
            var readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        }else{
            res.status(404).json({
                err: 'not an image'
            })
        }
    });
});
router.post('/addSubscribedManufacturers/:id', (req, res)=>{
    // console.log(req.body);
    manufacturerList = req.body;
    console.log(manufacturerList)
    for (let i = 0; i < manufacturerList.length; i++) {
        manufacturers.find({username: manufacturerList[i].username},(err, data)=>{
            distributor.findByIdAndUpdate({_id: req.params.id }, {$addToSet:{manufacturers:data[0]._id}}, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                }
            })
        });
    }
    
});
router.post('/addSubscribedPharmacists/:id', (req, res)=>{
    // console.log(req.body);
    pharmacistList = req.body;
    console.log(pharmacistList)
    for (let i = 0; i < pharmacistList.length; i++) {
        pharmacists.find({username: pharmacistList[i].username},(err, data)=>{
            distributor.findByIdAndUpdate({_id: req.params.id }, {$addToSet:{pharmacists:data[0]._id}}, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                }
            })
        });
    }
    
});
router.post('/removeSubscribedManufacturers/:id', (req, res)=>{
    // console.log(req.body);
    manufacturerList = req.body;
    console.log(manufacturerList)
    manufacturers.find({username: req.body.username},(err, data)=>{
        distributor.findByIdAndUpdate({_id: req.params.id }, {$pull:{manufacturers:data[0]._id}}, (err, result)=>{
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
        })
    }); 
});
router.post('/removeSubscribedPharmacists/:id', (req, res)=>{
    // console.log(req.body);
    pharmacistList = req.body;
    console.log(pharmacistList)
    pharmacists.find({username: req.body.username},(err, data)=>{
        distributor.findByIdAndUpdate({_id: req.params.id }, {$pull:{pharmacists:data[0]._id}}, (err, result)=>{
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
        })
    });
    
});
router.get('/allmanufacturers/:id', (req, res)=>{
    distributor.findById({_id: req.params.id}).populate('manufacturers').exec((err, allmanufacturers)=>{
        if(err){
            res.json({error: 'you have not subscribe to any manufacturers'});
            //  console.log('error in retrieving manufacturers ' + JSON.stringify(err, undefined, 2)); 
        }else{
            // console.log(manufacturer);
            res.json({msg:'list of manufacturers',allmanufacturers});
        }
    });
})

router.get('/allpharmacists/:id', (req, res)=>{
    distributor.findById({_id: req.params.id}).populate("pharmacists").exec((err, allpharmacists)=>{
        if(err){
            //res.json({error: 'you have not accept to any pharmacists'});
            console.log('error in retrieving pharmacists' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json({msg:'list of pharmacists',allpharmacists});
        }
    });
})
router.get('/distdashboard/:id', (req, res, next)=>{
    const dashboard = distributor.findOne({_id: req.params.id}, (err, data)=>{
        if(err){
            console.log('error in retrieving  ' + JSON.stringify(err, undefined, 2))
        }else{
            res.json(data);
        }
    })
    //console.log(dashboard.);
    
})
router.post('/placeOrder/:id', (req, res)=>{
    console.log(req.body);
    let order = new completeOrder ({
        orderId: req.body.orderId,
        //  email: req.body.email,
        /*  productName:req.body.productName,
        quantity: req.body.quantity,
        unitamount: req.body.unitamount,
        */manufacturerName:req.body.manufacturerName,
        subOrders: req.body.subOrders,
        issueDate: req.body.issueDate,
        deliveryDate: req.body.deliveryDate,
        totalAmount:req.body.totalAmount,
        status: req.body.status,
        manufacturerUsername: req.body.manufacturerUsername
    });
    
    completeOrder.placeOrder(order, (err, confirmOrder)=>{
        if(err){
            console.log('error '+ JSON.stringify(err));
        }else{
            distributor.findByIdAndUpdate({_id: req.params.id }, {$push:{orders: confirmOrder._id}}, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                }
            })
        }
    })
});
router.post('/deleteOrder/:id', (req, res)=>{
    console.log(req.body.orderId);
    /* completeOrder.deleteOrder(req.body.orderId, (err, deletedOrder)=>{
        if(err){
            console.log('error '+ JSON.stringify(err));
        }else{
            distributor.findByIdAndUpdate({_id: req.params.id }, {$pull:{orders: deletedOrder._id}}, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                }
            })
        }
    })*/
})
router.get('/allIncomingOrders/:id', (req, res)=>{
    distributor.findById({_id: req.params.id}).populate("orders").exec((err, listOfOutgoingOrders)=>{
        if(err){
            console.log('error in retrieving outgoing orders ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json({msg:'list of orders',listOfOutgoingOrders});
        }
    });
})

router.get('/allOutgoingOrders/:id', (req, res)=>{
    distributor.findById({_id: req.params.id}).populate("orders").exec((err, listOfOutgoingOrders)=>{
        if(err){
            console.log('error in retrieving outgoing orders ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json({msg:'list of orders',listOfOutgoingOrders});
        }
    });
})
module.exports = router;