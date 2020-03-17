const mongoose = require('mongoose');

const licenceInfoSchema = mongoose.Schema({
    firmName:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    registrationId:{
        type:String,
        required:true
    },
    issueDate: {
        type: Date,
        required: true
    },
    address:{
        type:String,
        required:true
    }
   
    
    
},{
    collection: 'licenceInfo'
});


const licenceInfo = module.exports = mongoose.model('licenceInfo', licenceInfoSchema);

module.exports.getUserByRegistrationId = function(id, callback){
    const query = {registrationId: id}
    console.log(query);
    licenceInfo.find(query, callback);
}
