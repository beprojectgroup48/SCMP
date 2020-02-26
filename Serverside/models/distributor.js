const mongoose = require('mongoose')

const distributorSchema = mongoose.Schema({
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

const distributors = module.exports = mongoose.model('distributors', distributorSchema);