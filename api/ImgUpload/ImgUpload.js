const multer = require('multer')

const storageImgEngine = multer.diskStorage({

    destination: "./IMG_Save",
    filename: (req, file, cb) => {
       let name = `${Date.now()}--${file.originalname}`
        req.fileOriginalName = name
      cb(null, name);
    },
  });



  

const uploadImg = multer({
    storage:storageImgEngine
})


  



module.exports = {uploadImg}