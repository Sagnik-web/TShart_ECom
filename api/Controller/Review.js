 const Review = require('../Model/Review')

 exports.createReview = async(req,res,next)=>{
    const review = await Review.create({...req.body,user:req.user._id})

    res.status(200).json({
        success:true,
        review
    })

 }


 exports.getReviews = async(req,res,next)=>{
    const review = await Review.find()

    res.status(200).json({
        success:true,
        review
    })
 }


 exports.getProductReviews = async(req,res,next)=>{

    let review
    const reviewdata = await Review.find({maledress:req.params.ID})

    if(!reviewdata) {
       review =  await Review.find({femaledress:req.params.ID})
    } else {
        review = reviewdata
    }

    res.status(200).json({
        success:true,
        review
    })
 }


 exports.getSingleReviews = async(req,res,next)=>{

    const review = await Review.findById(req.params.ID)

    res.status(200).json({
        success:true,
        review
    })
 }


 exports.updateReviewOwn = async(req,res,next)=>{

    const mreview = await Review.find({user:req.user._id,...req.body})

    const review = await Review.findByIdAndUpdate(mreview[0]._id,{ratting:req.body.ratting,msg:req.body.msg},{new:true})

    res.status(200).json({
        success:true,
        review
    })
 }

 exports.deleteReviewOwn = async(req,res,next)=>{

    const mreview = await Review.find({user:req.user._id,...req.body})

    const review  = await Review.findByIdAndDelete(mreview[0]._id)

    res.status(200).json({
        success:true
    })

 }


 exports.deleteReview = async(req,res,next)=>{

    const review  = await Review.findByIdAndDelete(req.params.ID)

    res.status(200).json({
        success:true
    })
 }


