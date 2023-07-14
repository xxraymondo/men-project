require("dotenv").config()
const express =require("express")
const mongoose =require("mongoose")
const userRoutes= require("./modules/users/routes/users.route")
const productRoutes= require("./modules/products/routes/products.route")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const connectionString =process.env.CONNECTION_STRING
mongoose.connect(connectionString,{}).then((data)=>{}).catch(()=>{console.log("no ")})
app.use(userRoutes)
app.use(productRoutes)

app.listen(3000,()=>{
    console.log("running")
})  