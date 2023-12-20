const express = require('express') 
const { maleDress, createMaleDress, singleMaleDress, updateMaleDress, deleteMaleDress, like, review } = require('../Controller/MaleDress')
const { protectAdmin, protectUser } = require('../Middleware/authMiddleware')
const maleDressRoute = express.Router()

maleDressRoute.route('/')
              .get(maleDress)
              .post(protectAdmin,createMaleDress)


maleDressRoute.route('/:ID')
              .get(singleMaleDress)
              .patch(protectAdmin,updateMaleDress)
              .delete(protectAdmin,deleteMaleDress)

maleDressRoute.route('/like/:ID')
              .patch(protectUser,like)

// maleDressRoute.route('/review/:ID')
//               .patch(protectUser,review)


module.exports = maleDressRoute
