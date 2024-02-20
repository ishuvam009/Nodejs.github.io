const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE;

mongoose.connect(DB,).then(() => {
    console.log("Connection Sucessful.");
}).catch((err) => {
    console.log(err);
})


app.get('/', (req,res) => {
    res.send("Hello.");
})

app.listen(port,() => {
    console.log("Server is running at PORT 5000.");
})