let mongoose = require('mongoose')
let employeeschema = mongoose.Schema({


    firstname:{type:String, required:true },
    lastname:{type:String, required:true },
    Address:{type:String, required:true},
    phone:{type:Number, required:true},
    gender:{type:Number, required:false},
    DOB:{type:Date, required:true},
    
    image:{type:String},
    
    // gender:{type:String, required:true},
    placeofworking:{type:String, required:true},
    empid:{type:String, required:true},
    experiance:{type:Number},
    
    empemailid:{type:String, required:true},
    
    
    qualification:{type:String},
    DOJ:{type:Date, required:true},
    
    DOE:{type:Date, required:true},
    Employment:{type:String, required:true},
    manageremailid:{type:String},
    designation:{type:String},
    permission:{type:String},
    department:{type:String},

    resume:{type:String}
})


let Employee = mongoose.model('employee', employeeschema)
module.exports = Employee