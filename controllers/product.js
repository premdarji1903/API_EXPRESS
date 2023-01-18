const product=require("../model/model");
const getalldetails = async(req,res)=>{
const mydata=await product.find(req.query).sort("-name");
    res.status(200).json({mydata});
    

        //req.query is used in get method which client search in url
}
const getfirstperson = async(req,res)=>{
    const mydata1=await product.find(req.query).sort("-name");
    res.status(200).json({mydata1});
}
