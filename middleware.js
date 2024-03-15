const express = require('express')
const app = express();

app.use((req, res, next)=>{
    req.name="rtest",
    next();
})

app.get('/welcome/login', (req,res,next)=>{
    res.log="logging"
    next();
}, (req, res, next)=>{
    res.auth = "Authen"
    next();
}, (req, res, next) => {
    res.send(res.log + " " + res.auth)
})

app.get('/welcome', (req,res)=> {
    res.send('Welcome' + req.name);
})

app.listen(3000);