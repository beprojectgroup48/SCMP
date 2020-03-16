const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const distributorSchema = mongoose.Schema({
    username:{
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

    password: {
        type:String,
        required:true
    },
    registrationId: {
        type: String,
        required: true
    }

},{
    collection: 'distributor'
});

const distributors = module.exports = mongoose.model('distributors', distributorSchema);


module.exports.getDistributorById = function(id, callback){
    distributors.findById(id, callback);
  }
  
  module.exports.getDistributorByUsername = function(username, callback){
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
  