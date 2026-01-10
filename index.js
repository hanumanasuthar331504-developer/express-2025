import express from 'express';
import { MongoClient } from 'mongodb';

const dbName = "login"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url)


const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
await client.connect().then((connection) => {
    const db = connection.db(dbName);

    app.get('/api', async(req, res) => {
        const collection = db.collection('users')
        const students = await collection.find().toArray();
        res.send(students)
    }),
    app.get('/ui', async(req, res) => {
        const collection = db.collection('users')
        const students = await collection.find().toArray();
        res.render('students',{students})
    })

    app.get('/add',(req,res)=>{
        res.render('add-student')
    })
    

    app.post('/add-student', async(req, res) => {
        console.log(req.body);
        const collection = db.collection('users');
        const result = await collection.insertOne(req.body)
        console.log(result)
        // const students = await collection.find().toArray();
        // res.send(students)
        res.send("data submitted")
    })
})


app.listen(3200)