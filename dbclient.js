
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://annop:1234@cluster0.o7raduy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const express = require('express')
const app = express();

// async function connect(){
//     try {
//         await MongoClient.connect(uri, (err, dbclient)=>{
//             if (err) {
//                 throw err;
//             }
        
//             const db_test = dbclient.db("sample_supplies");
//             console.log("Connection Successfully to "+ db_test.databaseName)
        
//             db_test.stats((err, result)=>{
//                 console.log("DB Stats: " + JSON.stringify(result, undefined, 2));
//                 dbclient.close();
//             })
//         })
//         console.log("Connect")
//     } catch (error) {
//         console.log("🚀 ~ error:", error)
        
//     }

// }
// connect();
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(database.databaseName)
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(3000, ()=>{
    console.log("Server Start on port 3000")
});
