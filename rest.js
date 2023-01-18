require('dotenv').config();
const express=require('express');
const connectdb=require('/REST_API/db/connect');
const mongoose=require('mongoose')
const app= express();
const PORT=process.env.port||2000;
const products=require("../REST_API/routes/product")
app.get("/",(req,res)=>{
    res.send("server is started")
});
//set router
app.use("/api/product",products)
const start =async()=>{
    try{
        await connectdb(process.env.MONGODB_URL
            );
        mongoose.set('strictQuery', true);
    app.listen(PORT,()=>{
       
    })}
    catch(err){
        console.log(err)
    }
}
start();
