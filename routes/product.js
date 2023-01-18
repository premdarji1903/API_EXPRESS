const express=require('express');
const router=express.Router();
const {getalldetails,getfirstperson}=require('../controllers/product');
router.route("/").get(getalldetails);
router.route("/f").get(getfirstperson);
module.exports=router;
module.exports=getalldetails;
module.exports=getfirstperson;
//8AVnUhYD3KaX93UA