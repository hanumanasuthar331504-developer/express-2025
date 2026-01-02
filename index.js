import express from 'express';
import path from 'path'
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const filePath = path.resolve('view/home.html');
    res.sendFile(filePath);
});

app.get('/login', (req, res) => {
    res.send(`
    <form action="/submit" method="get">
    <input type="text" placeholder="enter email" name="email"/>
    <br/>
    <br/>
    <input type="password" placeholder="enter password" name="password"/>
    <br/>
    <br/>
    <button>Login</button>
    </form>
    `)
});

app.post('/submit', (req, res) => {
    console.log("user login detail are : ", req.body);
    console.log(typeof req.body)
    res.send('<h1>Submit Page</h1>')
});

app.get('/users', (req, res) => {
    res.send('<h1>Users Page</h1>')
});

app.listen(3200);