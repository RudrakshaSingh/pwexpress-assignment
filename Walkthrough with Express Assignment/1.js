// Build a server using the http module in Node.js with API endpoints for getting products data. 
// The server should have the following routes:
// Route '/': Should send a message as "Welcome to Men & Women Dummy Data."
// Route '/men': Should send 10 products data for men.
// Route '/women': Should send 10 products data for women.
// Route '/other': Should send a response as "Page not found."
const express = require("express")
const app = express()
const port = 3000
app.get("/",(req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.send("Welcome to Men & Women Dummy Data.")
})

app.get("/men",(req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(
        [
          { id: 1, name: 'Men Product 1' },
          { id: 2, name: 'Men Product 2' },
          { id: 3, name: 'Men Product 3' },
          { id: 4, name: 'Men Product 4' },
          { id: 5, name: 'Men Product 5' },
          { id: 6, name: 'Men Product 6' },
          { id: 7, name: 'Men Product 7' },
          { id: 8, name: 'Men Product 8' },
          { id: 9, name: 'Men Product 9' },
          { id: 10, name: 'Men Product 10' },
        ],null,2))
})
app.get("/women",(req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify([
        { id: 1, name: 'Women Product 1' },
        { id: 2, name: 'Women Product 2' },
        { id: 3, name: 'Women Product 3' },
        { id: 4, name: 'Women Product 4' },
        { id: 5, name: 'Women Product 5' },
        { id: 6, name: 'Women Product 6' },
        { id: 7, name: 'Women Product 7' },
        { id: 8, name: 'Women Product 8' },
        { id: 9, name: 'Women Product 9' },
        { id: 10, name: 'Women Product 10' },
      ],null,2))
})
app.get("/other",(req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.send("page not found")
})

app.listen(
    port,()=>{
        console.log(`server running on localhost:${port}`);
    }
)