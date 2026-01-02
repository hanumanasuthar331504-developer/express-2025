import express from 'express';
const app=express();


app.set('view engine','ejs')
app.get('/',(req,res)=>{
res.render('home',{name:'Hanuman',ytChannel:'code step by step', age:29})
})

app.listen(3200)