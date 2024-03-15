const http = require('http');
const express = require('express')
const app = express();

// http way
// http.createServer((req, res) => {
//     if (req.method == 'GET') {
//         console.log("GET Method")
//         res.end();
//     } else if (req.method == 'POST') {
//         console.log("POST Method")
//         res.end();
        
//     }
// }).listen(3000,()=>{
//     console.log("Port 3000")

// })

//express way
app.get('/', (req,res)=> {
    res.send('Express');
})

app.listen(3000);