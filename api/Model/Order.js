const mongoose = require('mongoose')
const ObjID = mongoose.Types.ObjectId

const order = new mongoose.Schema({
    user:{
        type:ObjID,
        ref:'users'
    },
    maleProduct:[
        {
            product:{
                type:ObjID,
                ref:'maledress'
            },
            count:Number,
            Price:Number
        }
    ],
   
    TotalPrice:Number,
     
    status:{
        type:String,
        default:'shipping',
        enum:['shipping','onway','delevered']
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
    }
},{timestamps:true})


module.exports = mongoose.model('orders',order)

