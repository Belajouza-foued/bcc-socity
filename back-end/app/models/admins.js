const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
     
number:{
    type:String,
    required: true,
    unique: true,
    },
  
    email:{
        type:String,
        required: true,
       
        
        
    },
    password:{
        type:String,
        required: true,
            }
  
   
});
//user models//
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
