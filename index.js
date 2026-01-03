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

app.get('/users',(req,res)=>{
    const users=['hanuman','suthar','sam','peter','bruce']
    res.render('users',{users:users,isLogin:true});
});

app.listen(3200)