  const mongoose = require('mongoose');
  const bcrypt = require('bcryptjs');
  const jwt = require('json-web-token');
  const customerSchema = mongoose.Schema({
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
      address:{
          type:String,
          required:true
      },
      password: {
          type:String,
          required:true
      }
    

  },{
      collection: 'customer'
  });


  const customers = module.exports = mongoose.model('customers', customerSchema);


  module.exports.getCustomerById = function(id, callback){
      customers.findById(id, callback);
    }
    
    module.exports.getCustomerByUsername = function(username, callback){
      const query = {username: username}
      customers.findOne(query, callback);
    }
    
    module.exports.addCustomer = function(customer, callback){
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(customer.password, salt, (err, hash) => {
          if(err) throw err;
          customer.password = hash;
          customer.save(callback);
        });
      });
    }
    
    module.exports.comparePassword = function(candidatePassword, hash, callback){
      bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
      });
    }
    