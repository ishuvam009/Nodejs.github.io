const fs = require("fs");

//Synchronous
fs.writeFileSync("./test.txt", "Hey There!");

//Asynchronous
fs.writeFile("./test2.txt", "Hey There! Asynchronous", (err) =>{
    consolelog(err);
});