// Create a basic server using Express with different routesusing EXPRESS
// '/':send response as {msg:"I am homepage."}
// '/about':send response as {msg:"I am about page."}
// '/contact':send response as {email:"support@pwskills.com".}

const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.send(JSON.stringify({msg:"I am homepage."}))
})
app.get("/about",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.send(JSON.stringify({msg:"I am about page."}))
})
app.get("/contact",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    res.send(JSON.stringify({email:"support@pwskills.com."}))
})
app.listen(5000,()=>{
    console.log("server is running");
})
