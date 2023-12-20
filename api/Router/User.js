const express = require('express') 
const { login, register, allUser, singleUser, updateUser, deleteUser, ownUser, updateOwnUser, deleteOwnUser } = require('../Controller/User')
const { protectUser, protectAdmin } = require('../Middleware/authMiddleware')
const userRoute = express.Router()

userRoute.post('/login',login)
userRoute.post('/signup',register)

userRoute.get('/own',protectUser,ownUser)
userRoute.patch('/own',protectUser,updateOwnUser)
userRoute.delete('/own',protectUser,deleteOwnUser)

userRoute.get('/',protectAdmin,allUser)
userRoute.get('/:ID',protectAdmin,singleUser)
userRoute.patch('/:ID',protectAdmin,updateUser)
userRoute.delete('/:ID',protectAdmin,deleteUser)


module.exports = userRoute