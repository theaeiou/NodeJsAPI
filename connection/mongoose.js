const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb+srv://annop:1234@cluster0.o7raduy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test');

module.exports = db;