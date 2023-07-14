const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,required:true,unique:true
    },
    price:{
        type:Number,required:true
    },
    rating:{
        type:Number,required:true
    },
    numberOfStock:{
        type:Number,required:true
    }
})

const product=mongoose.model("product",productSchema)

module.exports=product
