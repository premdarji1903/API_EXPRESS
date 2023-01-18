const mongoose=require('mongoose');
const produts= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:"price must be important",
    },
    ratting:{
        type:Number,
        default:5,
    },
    createdat:{
        type:Date,
        default: Date.now(),
    }
})

module.exports=mongoose.model('Product',produts)//created a colletion