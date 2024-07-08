const express = require('express');
const mongoose=require('mongoose');
const app = express();
const config = require ('config')
const db=config.get('mongoURI')
require('dotenv').config() 
app.use(express.json())
const cors=require('cors')
app.use(cors())


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},(er)=>{
    if (er){
        console.log(er)
    }else{
        console.log('db connected successfully')
    }
})
let ProductRoute=require('./routes/Product')
app.use('/api',ProductRoute)
const UserRoute=require('./routes/User')
UserRoute(app)


const port = process.env.PORT || 4000;
app.listen(port,(er)=>{
    if(er){
        console.log(er)
    }else {
        console.log(`server connected on port ${port} `)
    }
})



