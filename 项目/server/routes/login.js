const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.post("/",(req,res)=>{
    var obj=req.body
    console.log(obj)
    if(obj.uname==''){
        res.send("用户未接受")
        return
    }
    if(obj.upwd==''){
        res.send("密码未接受")
        return
    }
    var sql="select * from wanyou_login where uname=? and upwd=?"
    pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
        if(err)throw err
        if(result.length>0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
})
module.exports=router;