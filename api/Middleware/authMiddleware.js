const User = require('../Model/User')
const Admin = require('../Model/Admin')
const jwt = require('jsonwebtoken')

exports.protectUser = async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Auth failed",
            success: false,
          });
        } else {
          const user = await User.findById(decoded.id);
          req.user = user
          // console.log(req.user);
          next();
        }
      });
    } catch (error) {
      return res.status(401).send({
        message: "Auth failed",
        success: false,
      });
    }
  };



  exports.protectAdmin = async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Auth failed",
            success: false,
          });
        } else {
          const admin = await Admin.findById(decoded.id);
          req.admin = admin
          // console.log(req.user);
          next();
        }
      });
    } catch (error) {
      return res.status(401).send({
        message: "Auth failed",
        success: false,
      });
    }
  };