// Create a backend for a Counter web app using Express with the following API 
// endpoints to manage the counter:
// '/': send the counter data as { "counter": value }.
// '/increment':increment counter by 1 and send in the response as { "counter": updatedValue }.
// '/decrement': decrement counter by 1 and send in the response as { "counter": updatedValue }.
const express = require("express")
const app = express()

let count = 0
app.get("/",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.send(JSON.stringify({counter:count}))
})
app.get("/increment",(req,res)=>{
    count++
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.send(JSON.stringify({counter:count}))
})
app.get("/decrement",(req,res)=>{
    count--
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.send(JSON.stringify({counter:count}))
})
app.listen(3001,()=>{
    console.log("server is running");
})