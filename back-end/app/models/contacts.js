const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
     
phoneNumber:{
    type:String,
    required: true,
    unique: true,
    },  
    email:{
        type:String,
        required: true,       
    },
    message:{
        type:String,
        required: true,
            }   
});
//user models//
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
