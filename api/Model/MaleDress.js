const mongoose = require('mongoose')
const ObjID = mongoose.Types.ObjectId

const maleDress = new mongoose.Schema({
    name:{
        type:String, // Brand + Product
        required:true
    },
    desc:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    discount_price:{
        type:Number
    },
    spacal_feature:{
        type:String
    },
    img1:{
        type:String,
        // require:true
    },
    like:[
        {
            type:ObjID,
            ref:'users'
        }
    ],
    status:{
        type:String,
        required:true,
        default:'pending',
        enum:['pending','approve','block']
    },
    img2:String,
    img3:String,
    img4:String,
    pd_manufactured_by:String,
    pd_packaged_by:String,
    pd_commodity:String,
    pd_sold_by:String,
    pd_spec:String,
    size:[],
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('maledress',maleDress)
