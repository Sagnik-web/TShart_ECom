const Admin = require('../Model/Admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// outer.post("/register", 
exports.registerManager = async (req, res) => {
    try {
      const adminExists = await Admin.findOne({ email: req.body.email });
      if (adminExists) {
        return res
          .status(200)
          .send({ message: "Admin already exists", success: false });
      }
      
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newadmin = new Admin(req.body);
      newadmin.save()
      
      res
        .status(200)
        .send({ message: "User created successfully", success: true });
      // console.log(req.body);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Error creating user", success: false, error });
    }
};
  



  exports.loginManager = async (req, res) => {
    try {
      const admin = await Admin.findOne({ email: req.body.email });
      if (!admin) {
        return res
          .status(200)
          .send({ message: "Admin does not exist", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, admin.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Password is incorrect", success: false });
      } else {
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res
          .status(200)
          .json({ message: "Login successful", success: true, data: token , name:admin.name});
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Error logging in", success: false, error });
    }
  };




// exports.createManager =async (req,res,next)=>{
//     const manager = await Admin.create(req.body)

//     res.status(200).json({
//         success:true,
//         manager
//     })

// }


exports.manager =async (req,res,next)=>{
    const mang = await Admin.find()

    res.status(200).json({
        success:true,
        manager:mang
    })

}


exports.singleManager =async (req,res,next)=>{
    const manager = await Admin.findById(req.params.ID)

    res.status(200).json({
        success:true,
        manager
    })

}


exports.updateManager =async (req,res,next)=>{
    const manager = await Admin.findByIdAndUpdate(req.params.ID,{...req.body},{new:true})

    res.status(200).json({
        success:true,
        manager
    })

}


exports.deleteManager =async (req,res,next)=>{
    const manager = await Admin.findByIdAndDelete(req.params.ID)

    res.status(200).json({
        success:true,
        msg:"Deleted Successfully"
    })

}

