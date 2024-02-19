const express = require('express');
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://admin:gw7Mb69XTMejZghv@cluster0.qjktjnz.mongodb.net/KIITDATA?retryWrites=true&w=majority";
const app = express();
const port = 5000;

mongoose.connect(mongoDB,).then(() => {
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