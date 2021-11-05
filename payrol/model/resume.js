let mongoose = require('mongoose')
let resumeschema = mongoose.Schema({ 

      image:{type:String},
      resume:{type:String}
})
let Resume = mongoose.model('resume',resumeschema)
module.exports = Resume