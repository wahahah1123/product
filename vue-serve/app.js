const express = require("express");
const mysql = require("mysql");
 const cors = require("cors");
 const session = require("express-session");
 var pool= mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:3306,
    database:"jucheng",
    connectionLimit:15
 });
 var server = express();
 server.use(cors({
   origin:["http://127.0.0.1:8080",
   "http://localhost:8080"],
   credentials:true
 }))
  //2.3:session
  server.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
  }))
 server.use(express.static("img"))
 server.listen(3000);
 server.get("/login",(req,res)=>{
    var uname = req.query.uname;
    var upwd = req.query.upwd;
  var sql = "SELECT id FROM ";
  sql +=" jucheng_login WHERE uname = ?";
  sql +=" AND upwd = md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
           res.send({code:-1,msg:"用户名或密码有误"});
        }else{
          req.session.uid = result[0].id;
           res.send({code:1,msg:"登录成功"});
        }
    })
  });
  server.get("/per",(req,res)=>{
     var sql="select * from jucheng_per"
     pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        res.send(result)
     })
  })
  server.get("/details",(req,res)=>{
     var sql="select * from jucheng_detalis"
     pool.query(sql,[],(err,result)=>{
        if(err)throw err
        res.send(result);
     })
  })
  server.get("/details1",(req,res)=>{
     var id=req.query.id
   var sql="select * from jucheng_detalis where id=?"
   pool.query(sql,[id],(err,result)=>{
      if(err)throw err
      res.send(result);
      console.log(result);
   })
})
server.get("/reg",(req,res)=>{
   var obj=req.query
   if(obj.uname==""){
      res.send("用户名不能为空");
      return
   }
   if(obj.upwd==""){
      res.send("请输入密码")
      return
   }
   var sql='insert into jucheng_login values(null,?,md5(?));'
   pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
      if(err)throw err;
      if(result.affectedRows>0){
         res.send({code:1,msg:"注册成功"})
      }else{
         res.send({code:-1,msg:"注册失败"})
      }
   
   })
})
server.get("/shop",(req,res)=>{
  var id=req.query.id
  var src=req.query.src
  var jtitle=req.query.jtitle
  var jprice=req.query.jprice
  var sql="insert into dongdada3 values(?,?,?,?)"
  pool.query(sql,[id,src,jtitle,jprice],(err,result)=>{
    if(err)throw err
    res.send(result);
  })
})

server.get("/getshop",(req,res)=>{
  var sql="select * from dongdada3"
  pool.query(sql,(err,result)=>{
    if(err)throw err
    res.send(result)
  })
})
server.get("/delete",(req,res)=>{
   var id=req.query.id
   var sql="DELETE FROM dongdada3 WHERE id = ?"
   pool.query(sql,[id],(err,result)=>{
      if(err) throw err
      if(result.affectedRows>0){
         res.send({code:1,msg:"删除成功"});
        }else{
         res.send({code:-1,msg:"删除失败"}) 
        }
   })
})
server.get("/product",(req,res)=>{
   //-参数
   var pno = req.query.pno;
   var ps = req.query.pageSize;
   // -设置默认值
   if(!pno){pno=1}
   if(!ps){ps=4}
   //-创建第一条 sql语句 当前页
   var obj = {code:1,msg:"查询成功"};
   var sql = "SELECT id,src";
   sql+=" ,jdate,jtitle,single,price";
   sql+=" FROM jucheng_detalis";
   sql+=" LIMIT ?,?";
   var off = (pno-1)*ps;
   ps = parseInt(ps);
   pool.query(sql,[off,ps],(err,result)=>{
       if(err)throw err;
       obj.data = result;
       var sql = "SELECT count(*) AS c FROM jucheng_detalis";
       pool.query(sql,(err,result)=>{
         if(err)throw err;
         var pc = Math.ceil(result[0].c/ps);
         obj.pc = pc;
         res.send(obj);
       })
   });
});  