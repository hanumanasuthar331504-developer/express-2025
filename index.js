import express from 'express';
const app=express();


// function ageCheck(req,res,next){
//     if(!req.query.age || req.query.age<18){
//         res.send("Alert ! You can not access this page");
//     }else{
//         next();
//     }
// }

// app.use(ageCheck)

function ipCheck(req,res,next){
    const ip=req.socket.remoteAddress;
    console.log(ip);
    if(ip.includes('192.168.1.66')){
        res.send("Alert ! You can not access this page");
    }else{
        next();
    }
}

app.use(ipCheck)

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
});

app.get("/login",(req,res)=>{
    res.send("<h1>Login page</h1>")
});

app.get("/admin",(req,res)=>{
    res.send("<h1>Admin page</h1>")
});


app.listen(3200);