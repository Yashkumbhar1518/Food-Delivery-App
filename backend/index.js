const express = require('express')
const app = express()
const mongoDB = require('./db')
mongoDB();
app.get('/',(req , res) =>{
    res.send("Hello")
}).listen(5000)

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
        
    )
    next();
})

app.use(express.json())
app.use("/api/",require("./routes/userRoute"))
app.use("/api/",require("./routes/menuRouter"))
app.listen(4000, ()=>console.log("Server at 4000"))
