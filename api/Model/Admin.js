const mongoose = require('mongoose')

const admin = new mongoose.Schema({
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
        role:{
            type:String,
            required:true,
            default:'manager',
            enum:["manager"]
        },
        status:{
            type:String,
            require:true,
            default:"approve",
            enum:["approve","block"]
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
        avatar:{
            type:String
        }
      },
      {
        timestamps: true,
      }
)

module.exports = mongoose.model('admins',admin)
