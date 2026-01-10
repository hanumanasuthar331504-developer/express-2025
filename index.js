import express from 'express';
import { MongoClient } from 'mongodb';

const dbName="login"
const url="mongodb://localhost:27017"

const client=new MongoClient(url)

async function dbConnection(){
await client.connect()
const db = client.db(dbName);
const collection=db.collection('users')

const result= await collection.find().toArray();
console.log(result)

}

dbConnection()

const app = express()

app.listen(3200)