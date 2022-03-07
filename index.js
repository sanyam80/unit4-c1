const express = require("express");
const app = express();

app.get("/books", logger,(req,res) => {
 return res.send({route:"/books"})
})
app.get("/libraries",logger, checkPermission, (req,res) => {
 return res.send({route:"/libraries",permission:req.role})
})
app.get("/authors", logger,checkPermission ,(req,res) => {
    return res.send({route:"/authors",permission:req.role})
})

function logger(req,res,next){
    console.log("request path")
    next();
}

 function checkPermission(req,res,next){
    if(req.path=="/libraries"){
       req.role = "true";
       
    }
    else if(req.path=="/authors"){
       req.role = "true";
       
        
    }
    else{
        req.role = "false"
    }
    next();
    
  

}
app.listen(5000,() =>{
    console.log("listening on port 5000")
})
