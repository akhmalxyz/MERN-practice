const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.EXPRESS_PORT;
dotenv.config();

app.use(express.json());
require("./connection/connection");

const AuthRoutes = require('./routes/user');
app.use('/auth', AuthRoutes);

const VideoRoutes = require('./routes/video');
app.use('/video', VideoRoutes);

app.listen(port, ()=>{
    console.log("Server is listening");
});