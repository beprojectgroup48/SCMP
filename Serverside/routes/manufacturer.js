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
const manufacturer = require('../models/manufacturer/manufacturermodel');
const pharmacist = require('../models/pharmacist/pharmacistmodel');
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
       manufacturer.findByIdAndUpdate({_id: req.params.id}, {image: req.file.filename}, (err, result)=>{
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
/*
router.get('/allmanufacturers', (req, res)=>{
    manufacturers.find((err, listOfManufacturers)=>{
        if(err){
            console.log('error in retrieving manufacturers ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json(listOfManufacturers);
        }
    })
})*/
router.get('/alldistributors/:id', (req, res)=>{
    console.log('inside all dists')
    manufacturer.findById({_id: req.params.id}).populate("distributors").exec((err, distributors)=>{
        if(err){
           // res.json({error: 'you have not subscribe to any manufacturers'});
           console.log('error in retrieving manufacturers ' + JSON.stringify(err, undefined, 2)); 
        }else{
            console.log(distributors);
            res.json({msg:'list of distributors',distributors});
        }
    });
})
router.get('/manudashboard/:id', (req, res, next)=>{
    const dashboard = manufacturer.findOne({_id: req.params.id}, (err, data)=>{
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
        subOrders: req.body.orders,
        issueDate: req.body.issueDate,
        deliveryDate: req.body.dueDate,
        totalAmount:req.body.finalAmount,
        status: req.body.status,
        manufacturerUsername: req.body.manufacturerUsername
    });
    
    completeOrder.placeOrder(order, (err, confirmOrder)=>{
        if(err){
            console.log('error '+ JSON.stringify(err));
        }else{
            console.log(confirmOrder._id);
            manufacturer.findByIdAndUpdate({_id: req.params.id }, {$push:{orders: confirmOrder._id}}, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(result);
                }
            })
            res.json(confirmOrder);
        }
    })
})

router.get('/allIncomingOrders/:id', (req, res)=>{
    manufacturer.findById({_id: req.params.id}).populate("manufacturers").exec((err, manufacturers)=>{
        if(err){
            res.json({error: 'you have not subscribe to any manufacturers'});
          //  console.log('error in retrieving manufacturers ' + JSON.stringify(err, undefined, 2)); 
        }else{
            res.json({msg:'list of manufacturers',manufacturers});
        }
    });
});
module.exports = router;