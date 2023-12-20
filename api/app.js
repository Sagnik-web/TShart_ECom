const express = require('express')
const cors = require('cors')
const userRoute = require('./Router/User')
const orderRoute = require('./Router/Order')
const maleDressRoute = require('./Router/MaleDress')
const adminRoute = require('./Router/Admin')
const reviewRoute = require('./Router/Review')
const ImgRoute = require('./ImgPost/ImgPost')

const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/v1/admin',adminRoute)
// app.use('/api/v1/fdress')
app.use('/api/v1/mdress',maleDressRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/order',orderRoute)
// app.use('/api/v1/statistics')
app.use('/api/v1/user',userRoute)
app.use('/api/v1/upload/img',ImgRoute)


module.exports = app

