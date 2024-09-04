require('dotenv').config()
const express=require('express')
const app=express()
const port=5000

app.get('/',(req,res)=>{
    res.send("Hello Handral Jadesha")
})

app.get('/Chai',(req,res)=>{
    res.send("A Cup Of Chai can make Difference.....")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login to Update....</h1>')
})

app.get('/run',(req,res)=>{
    res.send('<h2>Chai aur Handral Jadesha</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Express is listening to port number ${port}`)
})