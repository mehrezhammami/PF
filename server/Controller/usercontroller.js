const User= require('../Model/usermodel')
const bcrypt =require('bcrypt')
const jwt =require('jsonwebtoken')
exports.Signin=async(req,res)=>{
    User.find({email:req.body.email})
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message :'mail exists'
             
      })
}
else { 
    bcrypt.hash(req.body.password,10,(er,hash)=>{
if(er){
    return res.send(er)}
else {
     const user = new User({
     name:req.body.name,
    email:req.body.email,
    role:req.body.role,
    password:hash
})
user.save()
.then(data=>res.status(200).json({message:"user_added"}))
.catch(er=>console.log(er))

}
    })
}
    }
    )
}
exports.login=(req,res)=>{
    User.find({email:req.body.email})
    .then(user=>{
        if(user.length<1){
        return res.status(404).json({
            message:"Auth failed"
        })
    }
    else{
        bcrypt.compare(req.body.password,user[0].password,(er,result)=>{
if(er){
    return res.status(400).json({
        message:"Auth failed"
    })
} else{
const token=jwt.sign({
    email:user[0].email,
    userId:user[0]._id
},"secret");
return res.status(200).json({
    message:"successful Auth",
    token:token ,
    username:user[0].name,
    role:user[0].role,
})
}
        })
    }
 } )
}