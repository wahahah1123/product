const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
    var id=req.query.id;
    var sql="select * from wanyou_details1 where id=?"
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err
        res.send(result)
    })
})
module.exports=router;