const products = require("../../../schema/products")
const express =require("express")
const app = express()
app.use(express.json())
const createProduct= async(req,res)=>{
    const body=req.body
    const name=body.name
    const price=body.price
    const numberOfStock=body.numberOfStock
    const rating=body.rating
    if(body!=undefined){
        const product = new products({
            name:name,
            price:price,
            numberOfStock:numberOfStock,
            rating:rating
        })
        await product.save()
       return res.send(product)
    }
    return res.send({error:"error"})
}

const deleteProduct= async(req,res)=>{
    let id=req.params.id
   new products()
     const findProduct= await products.deleteOne({_id:id}).catch((err) => {
        res.send({ error: err.message });
    });
     return res.send(findProduct)
}
const getProduct=async(req,res)=>{
    let id=req.params.id
     new products()
    const findProduct= await products.findOne({_id:id}).catch((err) => {
        res.send({ error: err.message });
    });
    return res.send(findProduct)
}
const updateProduct=async (req,res)=>{
    let id=req.params.id
    const body=req.body
    new products()
    const findProduct= await products.updateOne({_id:id},body).catch((err) => {
        res.send({ error: err.message });
    });
    return res.send(findProduct) 
}
const getAllProducts= async(req,res)=>{
    new products()
    const findProduct= await products.find();
    return res.send(findProduct)
}
module.exports={
    createProduct,
    deleteProduct,
    getProduct,
    updateProduct,
    getAllProducts
}