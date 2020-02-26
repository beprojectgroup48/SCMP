const mongoose = require('mongoose')

const pharmacistSchema = mongoose.Schema({
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
    formType: {
        type: String,
        required: true
    },
    licenseNo: {
        type: String,
        required: true
    }

},{
    collection: 'registration'
});
const pharmacists = module.exports = mongoose.model('pharmacists', pharmacistSchema);