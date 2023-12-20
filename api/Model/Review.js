 const mongoose = require('mongoose')
 const ObjID = mongoose.Types.ObjectId
 
const productReviewSchema = new mongoose.Schema(
    {
        ratting:{
            type:Number
        },
        msg:{
            type:String
        },
        user: {
            type:ObjID,
            ref:'users'
        },
        maledress: {
            type:ObjID,
            ref:'maledress'
        },
        // femaledress:{
        //     type:ObjID,
        //     ref:'femaledress'
        // }
        
    },{timestamps:true}
)

module.exports = mongoose.model('review',productReviewSchema)
