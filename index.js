import express from 'express';
import path from 'path';
const app=express();

app.get("/",(req,res)=>{
    const absPath=path.resolve('view/home.html')
    res.sendFile(absPath)
}) 
app.get("/login",(req,res)=>{
    const absPath=path.resolve('view/login.html')
    res.sendFile(absPath)
}) 
app.get("/about",(req,res)=>{
    const absPath=path.resolve('view/about.html')
    res.sendFile(absPath)
}) 


app.listen(3200)