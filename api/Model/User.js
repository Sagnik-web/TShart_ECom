const mongoose = require('mongoose')

const user = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        address:{
            type:String
        },
        pincode:{
            type:String
        },
        landmark:{
            type:String
        },
        mobile:{
            type:String
        },
        status:{
          type:String,
          required:true,
          default:'approve',
          enum:['approve','block']
        }
      },
      {
        timestamps: true,
      }
)

module.exports = mongoose.model('users',user)
