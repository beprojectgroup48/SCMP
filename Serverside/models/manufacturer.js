const mongoose = require('mongoose')
const manufacturerSchema = mongoose.Schema({
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
    formType: {
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