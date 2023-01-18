require("dotenv").config();
const connect =require("/REST_API/db/connect");
const product=require("../REST_API/model/model");
const productjson=require("./product.json");
const start= async()=>{
    try{
        await connect(process.env.MONGODB_URL);
        await product.create(productjson);
        console.log("success")
    }
    catch(err){
        console.log(err)
    }
}
start();