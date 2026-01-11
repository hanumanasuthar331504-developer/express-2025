import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const dbName = "login"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url)


const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'ejs')
await client.connect().then((connection) => {
    const db = connection.db(dbName);

    app.get('/api', async (req, res) => {
        const collection = db.collection('users')
        const students = await collection.find().toArray();
        res.send(students)
    }),
        app.get('/ui', async (req, res) => {
            const collection = db.collection('users')
            const students = await collection.find().toArray();
            res.render('students', { students })
        })

    app.get('/add', (req, res) => {
        res.render('add-student')
    })


    app.post('/add-student', async (req, res) => {
        console.log(req.body);
        const collection = db.collection('users');
        const result = await collection.insertOne(req.body)
        console.log(result)
        // const students = await collection.find().toArray();
        // res.send(students)
        res.send("data submitted")
    })

    app.post("/add-student-api", async (req, res) => {
        console.log(req.body);
        const { name, profile, skills } = req.body;
        if (!name || !profile || !skills) {
            res.send({ message: "operation failed", success: false })
            return false
        } else {

        }

        const collection = db.collection("users");
        const result = await collection.insertOne(req.body)
        res.send({ message: "data stored", success: true, result: result })
    })

    app.delete("/delete/:id", async (req, res) => {
        console.log(req.params.id);
        const collection = db.collection("users")
        const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) })
        if (result) {
            res.send({
                message: "student data deleted",
                success: true
            })
        } else {
            res.send({
                message: "student data not deleted, try after sometime",
                success: false
            })
        }
    })

    app.get("/ui/delete/:id", async (req, res) => {
        console.log(req.params.id);
        const collection = db.collection("users")
        const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) })
        if (result) {
            res.send("<h1>Student record deleted</h1>")
        } else {
            res.send("<h1>Student record not deleted</h1>")
        }
    })

    app.get("/ui/student/:id",async(req,res)=>{
        const id = req.params.id;
        const collection = db.collection("users")
        const result = await collection.findOne({ _id: new ObjectId(req.params.id) })
        console.log(id)
        res.render('update-student',{result})
    })

    app.get("/student/:id",async(req,res)=>{
        const id = req.params.id;
        const collection = db.collection("users")
        const result = await collection.findOne({ _id: new ObjectId(req.params.id) })
        console.log(id)
        res.send({
            message:"data fetched",
            success:true,
            result:result
        })
    })

})


app.listen(3200)