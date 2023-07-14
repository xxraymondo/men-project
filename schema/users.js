const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,required:true,unique:true
    },
    
    age:{
        type:Number,required:true
    },
    password:{
        type:String,required:true
    },
    products : {
        type:Array, unique:true
    }
})


const User=mongoose.model("user",userSchema)

module.exports=User