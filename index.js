const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.EXPRESS_PORT;
dotenv.config();

app.get('/',(req,res)=>{
    res.send({"test" : "hello"})
})

app.listen(port, ()=>{
    console.log("Server is listening");
});