const MaleDress = require('../Model/MaleDress')

exports.createMaleDress =async (req,res,next)=>{
    const maleDress = await MaleDress.create(req.body)

    res.status(200).json({
        success:true,
        dress:maleDress
    })

}


exports.maleDress =async (req,res,next)=>{
    const dress = await MaleDress.find()

    res.status(200).json({
        success:true,
        dress:dress
    })

}


exports.singleMaleDress =async (req,res,next)=>{
    const dress = await MaleDress.findById(req.params.ID)

    res.status(200).json({
        success:true,
        dress:dress
    })

}


exports.updateMaleDress =async (req,res,next)=>{

    const dress = await MaleDress.findByIdAndUpdate(req.params.ID,{...req.body},{new:true})

    res.status(200).json({
        success:true,
        dress:dress
    })    

}


exports.like = async (req,res,next)=>{
        try {
          const post = await MaleDress.find({
            _id: req.params.ID,
            like: req.user._id,
          });
          if (post.length > 0) {
            return res
              .status(400)
              .json({ msg: "You have already liked this post" });
          }
    
          const like = await MaleDress.findOneAndUpdate(
            { _id: req.params.ID },
            {
              $push: { like: req.user._id },
            },
            {
              new: true,
            }
          );
    
          if (!like) {
            return res.status(400).json({ msg: "Post does not exist." });
          }
    
          res.json({ msg: "Post liked successfully." });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
}




// exports.review = async(req,res,next)=>{
//     try {
//       // console.log(req.user._id);
//         const post = await MaleDress.find({
//           _id: req.params.ID,
//           review:{$in:[user:req.user._id]}
//         });

        

//         console.log(post);
        // if (postReview.length > 0) {
        //   return res
        //     .status(400)
        //     .json({ msg: "You have already review this post" });
        // }
  
      //   const review = await MaleDress.findOneAndUpdate(
      //     { _id: req.params.ID },
      //     {
      //       $push: { review:{
      //           ratting:req.body.ratting,
      //           msg:req.body.msg,
      //           user: req.user._id
      //       } },
      //     },
      //     {
      //       new: true,
      //     }
      //   );
  
      //   if (!review) {
      //     return res.status(400).json({ msg: "Post does not exist." });
      //   }
  
      //   res.json({ msg: "Post review successfully." });
      // } catch (err) {
      //   return res.status(500).json({ msg: err.message });
      // }
// }




exports.deleteMaleDress =async (req,res,next)=>{

    const dress = await MaleDress.findByIdAndDelete(req.params.ID)

    res.status(200).json({
        success:true,
        msg:"Delete Item Successfully"
    })

}
