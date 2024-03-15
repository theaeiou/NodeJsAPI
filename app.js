const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise;
var db = require('./connection/mongoose');
var saleModel = require('./model/sale');
const app = express();

var sale = new saleModel({
    storeLocation: "Thai",
    couponUsed: true,
    purchaseMethod: "Phone"
});

app.use(bodyParser.json())
app.post('/sale/create', (req, res) => {
    var sale = new saleModel(req.body);
    sale.save()
    .then(result => {
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log('Exception while saving note:', err);
        res.status(400).send(err)
    });
})

app.get("/sales", (req, res) => {
  console.log("Get All");
  saleModel
    .find({})
    .then((response) => {
        res.statusCode = 200;
        res.send(response)
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = 400;
      res.send(err)
    });
});

app.get('/sale/:id', (req, res) => {
    console.log("Get by Id")
    saleModel.findOne({"_id": req.params.id})
    .then(response => res.status(200).send(response))
    .catch(err => res.status(400).send(err));
})

app.patch('/sale/:id', (req, res) => {
    console.log("Update by Id")
    req.body.saleDate = Date.now()
    saleModel.findOneAndUpdate({"_id": req.params.id}, req.body)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(400).send(err));
})

app.listen(3000, ()=>{
    console.log("Server Start on port 3000")
});

// sale.save()
// .then(result => {
//     console.log(result);
//     // mongoose.connection.close(()=>console.log('connection closed'));
// })
// .catch(err=>{
//     console.log('Exception while saving note:', err);
//     // mongoose.connection.close(()=>console.log('connection closed'));
// });

// saleModel.find({})
// .then(result => console.log(result))
// .catch(err => console.log(err));

// saleModel.findById('5bd761dcae323e45a93ccfe8')
// .then(result => console.log(result));

// saleModel.findOneAndUpdate({"date":"Mon Feb 26 2018"},{"note":"Learning Mongoose and its going good"})
// .then(result => console.log(result));