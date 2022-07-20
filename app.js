const express = require("express");
const request=require("request");
const bodyParser=require("body-parser");
const app=express();
const date=require(__dirname + "/date.js");
// console.log(date());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
// const ejs=require("ejs");
app.set('view engine' , 'ejs')
// app.use("ejs");"

var items=["Breakfast" , "Lunch" , "Dinner"];
var workitems=[];
app.get("/",function(req,res){
    
    // if (currentday === 6 || currentday == 0) {
    //     if (currentday === 6) {
    //          day="saturday";
            
    //     }
    //     else{
    //         day ="sunday";
    //     }
        
    // }
    // else{
        // switch(currentday){

        //     case 1: day="monday";
        //     break;
        //     case 2: day="tuesday";
        //     break;
        //     case 3: day="wednesday";
        //     break;
        //     case 4: day="thursday";
        //     break;
        //     case 5: day="friday";
        //     break;
        //     case 6: day="saturday";
        //     break;
        //     case 0: day="sunday";
        //     break;
            
        // }
        // var day=date();
        // var day=date.getday();
        var day=date.getdate();
        res.render("list" , {Listtitle:day, newListItem:items});
        
    // response.send("<h1>Working Fine!</h1>");
    // }
});
app.post("/",function(req,res){
    var item = req.body.newItem;
    if (req.body.list === "Work") {
        workitems.push(item);
        res.redirect("/work")
    } else {
        console.log(req.body);
    items.push(item);
    res.redirect("/");
    }
    
});

app.get("/work" ,function(req,res){
    res.render("list" ,{Listtitle :"Work", newListItem: workitems});
});

app.post("/work",function(req,res){
    var item = req.body.newItem;
    workitems.push(item);
    res.redirect("/work");
});
app.listen(3000,function(){
    console.log("server is running at port 3000");
});