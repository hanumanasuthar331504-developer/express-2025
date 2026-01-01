import express from 'express';
const app=express();

function checkRoute(req,res,next){
    console.log("user is accessing "+req.url+" Page");
    next();
}

app.use(checkRoute)

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/users",(req,res)=>{
    res.send("Users Page")
})

app.get("/products",(req,res)=>{
    res.send("Products Page")
})

app.listen(3200)