const express = require('express');
const dotenv = require('dotenv');
//const mongoose = require('mongoose');

const app = express();
const port = 5000;

dotenv.config({path: './config.env'});


require('./DB/db')

app.get('/', (req,res) => {
    res.send("Hello.");
})

app.listen(port,() => {
    console.log("Server is running at PORT 5000.");
})