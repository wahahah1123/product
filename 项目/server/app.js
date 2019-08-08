
const express = require('express');
const bodyParser = require('body-parser');
const details=require("./routes/details")
const artists=require("./routes/artists")
const login=require("./routes/login")
const details1 = require("./routes/details1")
const cors=require("cors")
var app = express();
var server = app.listen(3000);
app.use(cors({
    origin:"http://127.0.0.1:5501"
}))
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('img'));
/*使用路由器来管理路由*/
app.use("/details",details)
app.use("/artists",artists)
app.use("/login",login)
app.use("/details1",details1)