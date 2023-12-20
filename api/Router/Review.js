const express = require('express')
const { createReview, getReviews, getProductReviews, deleteReview, deleteReviewOwn, updateReviewOwn } = require('../Controller/Review')
const { protectAdmin, protectUser } = require('../Middleware/authMiddleware')

const reviewRoute = express.Router()

reviewRoute.route('/')
           .post(protectUser,createReview)
           .get(protectAdmin,getReviews)          //---Admin

reviewRoute.route('/:ID')
            .get(getProductReviews)
            .delete(protectAdmin,deleteReview)

reviewRoute.route('/own')
            .delete(protectUser,deleteReviewOwn)
            .patch(protectUser,updateReviewOwn)

module.exports = reviewRoute