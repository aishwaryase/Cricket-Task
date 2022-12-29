const mongoose = require("mongoose");

const uploadDeviceSchema = new mongoose.Schema({
    video: {
        type: String,
        require: true
    },
    title:{
        type: String,
        required: true
    },
    category:{
        type : Number,
        required:true
    },
    add_tag:{
        type : Number, 
        required:true
    }
    
}, { timestamps: true });

module.exports = mongoose.model("uploadDevice", uploadDeviceSchema)