const express=require("express")
const router=express.Router();
const pool=require("../pool")
router.get('/',(req,res)=>{
    var sql='select * from wanyou_artists'
    pool.query(sql,[],(err,result)=>{
        if(err) throw err
        res.send(result);
        console.log(result);
    })
})
module.exports = router;