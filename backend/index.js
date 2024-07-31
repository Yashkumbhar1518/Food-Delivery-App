const express = require('express')
const app = express()
const mongoDB = require('./db')
mongoDB();
app.get('/',(req , res) =>{
    res.send("Hello")
}).listen(5000)

app.use(express.json())
app.use('/api',require('./routes/userRoute'));