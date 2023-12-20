const User = require('../Model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




exports.register = async (req, res) => {
    try {
      const userExists = await User.findOne({ email: req.body.email });
      if (userExists) {
        return res
          .status(200)
          .send({ message: "User already exists", success: false });
      }
      
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newuser = new User(req.body);
      newuser.save()
      
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
  



  

  exports.login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "User does not exist", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Password is incorrect", success: false });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res
          .status(200)
          .json({ message: "Login successful", success: true, data: token , name:user.name});
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "Error logging in", success: false, error });
    }
  };




  exports.allUser = async(req,res,next)=>{
    try{
    const user = await User.find()
    if (!user) {
      return res
        .status(200)
        .send({ message: "NO User exist", success: false });
    }
    res.status(200)
       .json({ message: "Data Get successful", success: true,user});

    }catch(err){
      res.status(400)
       .json({ message: "Error", success: false,err});
    }
  }


  exports.ownUser = async(req,res,next)=>{
    try{
    const user = await User.findById(req.user._id)

    if(!user){
      return res.status(404)
                .json({ message: "Data Not Found", success: false});
    }

    res.status(200)
       .json({ message: "Data Get successful", success: true,user});

    }catch(err){
      res.status(400)
       .json({ message: "Error", success: false,err});
    }
  }



  exports.singleUser = async(req,res,next)=>{
    try{
    const user = await User.findById(req.params.ID)

    if(!user){
      return res.status(404)
                .json({ message: "Data Not Found", success: false});
    }

    res.status(200)
       .json({ message: "Data Get successful", success: true,user});

    }catch(err){
      res.status(400)
       .json({ message: "Error", success: false,err});
    }
  }


  exports.updateOwnUser = async(req,res,next)=>{
    try{
    const user = await User.findByIdAndUpdate(req.user._id,{...req.body},{new:true})

    if(!user){
      return res.status(404)
                .json({ message: "Data Not Found", success: false});
    }

    res.status(200)
       .json({ message: "Data Updated successful", success: true,user});

    }catch(err){
      res.status(400)
       .json({ message: "Error", success: false,err});
    }
  }


  exports.updateUser = async(req,res,next)=>{
    try{
    const user = await User.findByIdAndUpdate(req.params.ID,{...req.body},{new:true})
    
    if(!user){
      return res.status(404)
                .json({ message: "Data Not Found", success: false});
    }
    
    res.status(200)
       .json({ message: "Data Updated successful", success: true,user});
    
    }catch(err){
      res.status(400)
       .json({ message: "Error", success: false,err});
    }
    
  }



  exports.deleteOwnUser = async(req,res,next)=>{
    try{
    const user = await User.findByIdAndDelete(req.user._id)

    res.status(200)
       .json({ message: "Data Delted successful", success: true});

    }catch(err){
      res.status(400)
       .json({ message: "Error", success: false,err});
    }
  }

  exports.deleteUser = async(req,res,next)=>{
    try{
    const user = await User.findByIdAndDelete(req.params.ID)

    res.status(200)
       .json({ message: "Data Delted successful", success: true});

    }catch(err){
      res.status(400)
       .json({ message: "Error", success: false,err});
    }
  }

