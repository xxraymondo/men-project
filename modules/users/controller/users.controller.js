
const User=require("../../../schema/users")
const dotenv=require("dotenv").config()
const Product=require("../../../schema/products")
const jwt =require("jsonwebtoken")
const express =require("express")
const app = express()
app.use(express.json())
let token=null;
let loginUserId=null
const register= async (req,res)=>{
    const body=req.body  
    const newUser=new User({
        username:body.username,
        password:body.password
    })
    await newUser.save()
    res.send(newUser)
}
const login =async(req,res)=>{
    const body=req.body
    const username=body.username
    const password= body.password
   const Users= await User.find()
   const findingUser= await Users.find((element)=>element.username==username&&element.password==password)
   if(findingUser==null){
    return res.status(404).json({error:"user not found "}) 
   }
      token=  jwt.sign(findingUser.toJSON(),process.env.JWT_SECRET)
      loginUserId=findingUser._id
      console.log(loginUserId)
     return res.status(200).json({...findingUser,token})
    // return res.status(200).json({findingUser})
}
const buyProduct = async (req,res)=>{
    if(!token||!loginUserId){
        return res.send({ error: "please login first" });
    }
    const id = req.params.id
  const findProduct= await Product.findOne({_id:id}).catch((err) => {
        return res.send({ error: err.message });
    });
 
  const updatedUser= await User.findOne(
        { _id: loginUserId }
     ).updateOne( { $push: { products:{id}} })
    
    return res.send(updatedUser)
}
const removeProductFromCart = async(req,res)=>{
    if(!token||!loginUserId){
        return res.send({ error: "please login first" });
    }
    const id = req.params.id
    const findProduct= await Product.findOne({_id:id}).catch((err) => {
        return res.send({ error: "no product found" });
    });

    const updatedUser= await User.findOne({ _id: loginUserId })
    const x = await updatedUser.products.find({})
    return res.send(x)
}

module.exports={
    register,
    login,
    buyProduct,
    removeProductFromCart
}