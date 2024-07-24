const express = require('express')
const app = express()
const mongoDB = require('./db')
mongoDB();
app.get('/',(req , res) =>{
    res.send("Hello")
}).listen(5000)