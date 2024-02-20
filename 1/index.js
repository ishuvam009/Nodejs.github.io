const express = require('express');
const dotenv = require('dotenv');
//const mongoose = require('mongoose');
const app = express();
const port = 5000;

//Getting the environment variables
dotenv.config({path: './config.env'});

//Getting the DB Connection
require('./DB/db')

app.get('/', (req,res) => {
    res.send("Hello.");
})

app.listen(port,() => {
    console.log("Server is running at PORT 5000.");
})