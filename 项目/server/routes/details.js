const express=require("express")
const router=express.Router();
const pool=require("../pool")
router.get('/',(req,res)=>{
    var page=parseInt(req.query.page) 
    var count= parseInt(req.query.count) 
    var start=(page-1)*count
    var sql='select * from wanyou_details limit ?,?'
    pool.query(sql,[start,count],(err,result)=>{
        if(err) throw err
        res.send(result);
        console.log(result);
    })
})
module.exports = router;