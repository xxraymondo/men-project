const express=require("express");
const { register,login, buyProduct,removeProductFromCart } = require("../controller/users.controller");

const router =express.Router()

router.get("/login", login)

router.post("/register", register)

router.post("/addProduct/:id",buyProduct)

router.delete("/deleteProductFromCart/:id",removeProductFromCart)

module.exports= router