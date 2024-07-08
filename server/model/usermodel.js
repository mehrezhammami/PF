const mongoose =require('mongoose')
const UserSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String,default:"client"}
})
module.exports =mongoose.model('user',UserSchema)