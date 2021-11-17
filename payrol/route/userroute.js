let express = require('express')
let userroute = express.Router()


let User = require('../model/usermodel')
let Employee = require('../model/employeemodeil')
let bcrypt = require('bcryptjs')
let asynchandler = require('express-async-handler')
let generatetoken = require('../util/token')
let protect = require('../middleware/adminmiddleware')

let Resume = require('../model/resume')

userroute.get('/',(req,res)=>{
  res.send('hello')
})


userroute.post('/signup',async(req,res)=>{
  let {email, password} = req.body
  if(!email || !password){
     
    res.status(400).send({

      message:'please enter the reequired fields'
    })
  }
  let userpwd = await bcrypt.hash(password, 10)
  let user = User({
    email,
    password:userpwd
  })
  let saveduser = await user.save() 
  if(saveduser){
      
    res.send(saveduser)
  }
  else {
    res.send('user can not be saved')
  } 
})
userroute.post('/login',asynchandler( async(req,res)=>{
  let {email, password} = req.body  
  let user = await User.findOne({email})
 
  if(user){
    if(await bcrypt.compare(password, user.password)){

   res.json({
    _id:user._id, 
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token: generatetoken(user._id)
  
  })
}
else {
  res.status(401)
  throw new Error('wrong credential')

} 
} 

else {
  res.status(401)
  throw new Error('wrong credential')
}



}))

userroute.post('/onboard', async(req,res)=>{
  let {DOB, Employment, address1, address2, department, designation, empemailid, empid, experienece, firstname, lastname, manageremailid, permission, phone, qualification, DOE, DOJ, placeofworking} = req.body
  // let {address1} = req.body
  console.log(address1)
  let employee = new Employee({
     DOB,

     Employment,
     
     Address:address1 + address2,  
    
     department,
     designation,
     empemailid,
     empid,
     experienece,   
     firstname,
     lastname,
     manageremailid,
     permission,
     phone,
     qualification, 
     DOE,
     DOJ,
     placeofworking 
  })
   
  let emp = await employee.save()
   if(emp){
    res.json(emp)
  }
else {
    res.status(401).json({
        message:'user can not be created'
    })

  } 
 

// console.log(address1)
})

userroute.post('/resume',async(req,res)=>{
  let {image, resume} = req.body
  let employee_resume = new Resume({


    image,
    resume
  })  
  let emp = await employee_resume.save()
  

  
  if(emp){
    res.json(emp)
  }
else {
    res.status(401).json({
        message:'user can not be created'
    })

  } 
})
 

userroute.get('/employee',async(req,res)=>{
  
  let emp = await Employee.find({})
       


  res.json(emp)
})
userroute.get('/test',protect,(req,res)=>{
  res.send('access')
})
module.exports = userroute