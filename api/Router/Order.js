const express = require('express') 
const { createOrder, order, singleOrder, updateOrder, deleteOrder } = require('../Controller/Order')
const orderRoute = express.Router()

orderRoute.route('/')
            .post(createOrder)
            .get(order)
            
orderRoute.route('/:ID')
          .get(singleOrder)
          .patch(updateOrder)
          .delete(deleteOrder)


          
module.exports = orderRoute
