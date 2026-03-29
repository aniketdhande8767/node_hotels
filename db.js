const mongoose = require('mongoose');
require('dotenv').config();


//  const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
//  mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//  })

// const mongoose = require("mongoose");

mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
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