 const mongoose = require('mongoose');

 const mongoURL = 'mongodb://localhost:27017/hotels'

//  mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//  })

// const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log("error.. to the mongodb server", err);
});



 const db = mongoose.connection;
//  db.on('connected',()=>{
//     console.log('connected to the mongodb server')
//  })
//  db.on('error',()=>{
//     console.log('error.. to the mongodb server')
//  })

//  db.on('disconnected',()=>{
//     console.log('disconnected to the mongodb server')
//  })

 module.exports = db;