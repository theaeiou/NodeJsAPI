const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function(){
//     console.log('We are connected');
//     db.close();
// })
var saleSchema = new Schema({
    item:{
        type: Array,
        default: []
    },
    storeLocation:{
        type: String,
        default: "Thailand"
    },
    customer: {
        type: Object,
        default: {
            gender: "M",
            age: 25,
            email: "adwa@mail.com",
            satisfaction: 4
        }
    },
    couponUsed: {
        type: Boolean,
        default: false
    },
    purchaseMethod: {
        type: String,
        default: "Online"
    },
    saleDate:{
        type: Date,
        default: Date.now()
    }

});

var saleModel = mongoose.model('sales',saleSchema);

module.exports = saleModel;