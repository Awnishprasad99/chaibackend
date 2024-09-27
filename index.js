require('dotenv').config()

const express = require('express')

const app = express();



app.get('/',(req,res)=>{
    res.send("hello there")
})

app.get('/twitter',(req,res)=>{
res.send("running twitter")
})

app.get('/login',(req,res)=>{
res.send(
   "<h1>hello world</h1>" 
)
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running bro !! ${process.env.PORT}`)
})