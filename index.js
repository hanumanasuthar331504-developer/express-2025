import express from 'express';
const app=express();

function checkAgeRouteMiddleware(req,res,next){
if(!req.query.age || req.query.age<18){
    res.send("You are not allowed use this website")
}else{
    next();
}
}

// app.use(checkAgeRouteMiddleware);

app.get('',(req,res)=>{
res.send("<h1>Home Page</h1>")
});

app.get('/login',checkAgeRouteMiddleware,(req,res)=>{
res.send("<h1>Login Page</h1>")
});

app.get('/users',(req,res)=>{
res.send("<h1>Users Page</h1>")
});

app.get('/products',checkAgeRouteMiddleware,checkAgeRouteMiddleware,(req,res)=>{
res.send("<h1>products Page</h1>")
});

app.listen(3200);