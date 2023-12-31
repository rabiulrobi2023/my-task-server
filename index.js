const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config()
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bta6ici.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {

        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Server Is Running")
})

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)

})

    