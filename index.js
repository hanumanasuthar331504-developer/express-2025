import express from 'express';
const app=express();

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/add-user',(req,res)=>{
res.render('addUser');
});

app.post('/submit-user',(req,res)=>{
    console.log(req.body)
res.render('SubmitUser',req.body)
});

app.listen(3200)