let express = require('express')
let mongoose = require('mongoose')


let bodyparser = require('body-parser')
let cors = require('cors')
let app = express()
let userroute = require('./route/userroute')
mongoose.connect('mongodb://localhost:27017/payrol').then(()=>{
      console.log('db connected')    

    }).catch((err)=>{

       console.log(err)
    })
// app.use(express.json()) 
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded())


app.use(cors())

app.use(bodyparser.json({ limit: '30mb', extended: true }))
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }))


app.use('/api/user', userroute)    


app.get('/',(req,res)=>{
  
  
  
  
    res.send('hello')

})
app.listen(3200, console.log('server start'))