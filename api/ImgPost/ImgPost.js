const express = require('express');
const { uploadImg } = require('../ImgUpload/ImgUpload');

const ImgRoute = express.Router()

ImgRoute.post('/',uploadImg.single('img'),(req,res)=>{
    if (req.file) {
        res.status(200).json({
            success:true,
            data:req.fileOriginalName
        })
      } else {
        res.status(400).send("Please upload a valid image");
      }
})


module.exports = ImgRoute


