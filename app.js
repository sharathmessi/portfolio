var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var $ = require("jquery");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
    res.render("home");
});
app.get("/cv",function(req,res){
    res.render("about");
});

app.get("/works",function(req,res){
    res.render("works");
});

app.get("/contact",function(req,res){
    res.render("contact");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The app is running");
});