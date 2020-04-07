const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const pharmacistSchema = mongoose.Schema({
    username:{
       type:String,
       required:true
    },
    email: {
       type: String,
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
    location:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    registrationId: {
        type: String,
        required: true
    }

},{
    collection: 'pharmacist'
});
const pharmacists = module.exports = mongoose.model('pharmacists', pharmacistSchema);


module.exports.getPharmacistById = function(id, callback){
  pharmacists.findById(id, callback);
  }
  
  module.exports.getPharmacistByUsername = function(username, callback){
  
    const query = {username: username}
    pharmacists.findOne(query, callback);
  }
  
  module.exports.addPharmacist = function(pharmacist, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(pharmacist.password, salt, (err, hash) => {
        if(err) throw err;
        pharmacist.password = hash;
        pharmacist.save(callback);
      });
    });
  }
  
  module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
  