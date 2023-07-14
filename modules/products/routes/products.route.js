const express  = require("express")
const {createProduct,deleteProduct,getProduct,updateProduct,getAllProducts} =require("../controller/products.controller")

const router = express.Router()


router.post("/product",createProduct)
router.delete("/product/:id",deleteProduct)
router.get("/product/:id",getProduct)
router.put("/product/:id",updateProduct)
router.get("/products",getAllProducts)
module.exports=router
