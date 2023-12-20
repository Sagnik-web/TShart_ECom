const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = require('./app')
dotenv.config()

const db = process.env.DB
mongoose.connect(db,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log('Database Connected Successfully.');
}).catch(err=>{
    console.log(`Database is Not Connected. Error: ${err}`);
})



const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is running on port number ${port}...`);
})