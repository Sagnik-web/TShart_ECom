const express = require('express') 
const { loginManager, singleManager, manager, registerManager, updateManager, deleteManager } = require('../Controller/Admin')
const { protectAdmin } = require('../Middleware/authMiddleware')
const adminRoute = express.Router()

adminRoute.post('/login',loginManager)
adminRoute.post('/signup',registerManager)
adminRoute.get('/',protectAdmin,manager)
adminRoute.get('/:ID',protectAdmin,singleManager)
adminRoute.patch('/:ID',protectAdmin,updateManager)
adminRoute.delete('/:ID',protectAdmin,deleteManager)



module.exports = adminRoute
