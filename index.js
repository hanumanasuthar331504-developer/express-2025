import express from 'express';
import { MongoClient } from 'mongodb';

const dbName="login"
const url="mongodb://localhost:27017"

const client=new MongoClient(url)


const app = express()

app.set('view engine','ejs');
app.set()
app.get("/",async(req,res)=>{
    await client.connect()
const db = client.db(dbName);
const collection=db.collection('users')

const students= await collection.find().toArray();

    res.render('students',{students})
})

app.listen(3200)