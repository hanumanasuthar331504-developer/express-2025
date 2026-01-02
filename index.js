import express from 'express';
import morgan from 'morgan';
const app=express();

app.use(morgan('dev'))
app.get('/',(req,res)=>{
    res.send('Home page')
});

app.get('/users',(req,res)=>{
    res.send('Users pages me thoda change kia hai')
});

app.get("/wait",(req,res)=>{
    setTimeout(()=>{
        res.send('result after 1 second')
    },1000)
});

app.listen(3200);