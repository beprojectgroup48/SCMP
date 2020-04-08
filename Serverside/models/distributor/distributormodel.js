const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let manufacturer = require('../manufacturer/manufacturermodel');
let pharmacist = require('../pharmacist/pharmacistmodel');
let orders = require('./complete-order');
let Schema = mongoose.Schema;
const distributorSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required: true
  },
  name:{
    type:String,
    required:true
  },
  mobileNumber:{
    type:Number,
    required:true
  },
  password: {
    type:String,
    required:true
  },
  registrationId: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  manufacturers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'manufacturer'
    }
  ],
  pharmacists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'pharmacist'
    }
  ],
  orders: [{
    type : Schema.Types.ObjectId,
    ref : 'orders'
    }
  ]
 
  
},{
  collection: 'distributor'
});

const distributors = module.exports = mongoose.model('distributors', distributorSchema);


module.exports.getDistributorById = function(id, callback){
  distributors.findById(id, callback);
}

module.exports.getDistributorByUsername = function(username, callback){
  console.log('inside distributor model');
  const query = {username: username}
  distributors.findOne(query, callback);
}

module.exports.addDistributor = function(distributor, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(distributor.password, salt, (err, hash) => {
      if(err) throw err;
      distributor.password = hash;
      distributor.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
