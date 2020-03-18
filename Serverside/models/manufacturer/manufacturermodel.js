const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');;

const manufacturerSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    transportAgency:{
        type: String,
        required: true
    },
    modeOfTransport: {
        type: String,
        required: true
    },
    licenceNumber: {
        type: String,
        required: true
    }
},{
    collection: 'manufacturer'
});

const manufacturers = module.exports = mongoose.model('manufacturers', manufacturerSchema);


module.exports.getManufacturerById = function(id, callback){
    manufacturers.findById(id, callback);
  }
  
  module.exports.getManufacturerByUsername = function(username, callback){
    const query = {username: username}
    manufacturers.findOne(query, callback);
  }
  
  module.exports.addManufacturer = function(manufacturer, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(manufacturer.password, salt, (err, hash) => {
        if(err) throw err;
        manufacturer.password = hash;
        manufacturer.save(callback);
      });
    });
  }
  
  module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
  