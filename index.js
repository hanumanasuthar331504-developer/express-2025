import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send('Home Page')
});

app.get('/users',(req,res,next)=>{
    res.send('users Page')
});

app.get('/error',(req,res,next)=>{
const error=new Error('')
error.status=404;
next(error)
});

// function errorHandling (error,req,res,next){
// res.status(error.status||500).send('Try after some time')
// }

app.use((error,req,res,next)=>{
res.status(error.status||500).send('Try after some time')
})
app.listen(3200);