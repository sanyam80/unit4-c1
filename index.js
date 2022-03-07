const express = require("express");
const app = express();

app.get("/books", logger,(req,res) => {
 return res.send({route:"/books"})
})
app.get("/libraries",logger,  (req,res) => {
 return res.send({route:"/libraries",permission:"true"})
})
app.get("/authors", logger, (req,res) => {
    return res.send({route:"/authors",permission:"true"})
})

function logger(req,res,next){
    console.log("request path")
    next();
}

 function checkPermission(req,res,next){
    if(req.path=="/libraries"){
       req.role = "true"
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