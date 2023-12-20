const Order = require('../Model/Order')

exports.createOrder =async (req,res,next)=>{
    const ord = await Order.create(req.body)

    res.status(200).json({
        success:true,
        order:ord
    })

}


exports.order =async (req,res,next)=>{
    const ord = await Order.find()

    res.status(200).json({
        success:true,
        order:ord
    })


}


exports.singleOrder =async (req,res,next)=>{
    const ord = await Order.findById(req.params.ID)

    res.status(200).json({
        success:true,
        order:ord
    })


}


exports.updateOrder =async (req,res,next)=>{
    const ord = await Order.findByIdAndUpdate(req.params.ID,{...req.body},{new:true})

    res.status(200).json({
        success:true,
        order:ord
    })


}


exports.deleteOrder =async (req,res,next)=>{
    const ord = await Order.findByIdAndDelete(req.params.ID)

    res.status(200).json({
        success:true,
        msg:"Delete Order Successfully."
    })


}
