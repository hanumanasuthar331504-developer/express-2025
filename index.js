import express from 'express';
import path from 'path';
const app=express();
const absPath=path.resolve('view')

app.get("/",(req,res)=>{
    res.sendFile(absPath+'/home.html')
}) 
app.get("/login",(req,res)=>{
    res.sendFile(absPath+'/login.html')
}) 
app.get("/about",(req,res)=>{
    res.sendFile(absPath+'/about.html')
}) 

app.use((req,res)=>{
    res.status(404).sendFile(absPath+'/404.html')
})


app.listen(3200)