let mongoose = require('mongoose')
let userschema = mongoose.Schema({


    email:{type:String, required:true},
    password:{type:String, required:true},
    isAdmin:{type:Boolean, default:false}
})
let User = mongoose.model('user',userschema)
module.exports = User