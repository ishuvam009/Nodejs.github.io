const fs = require("fs");

//Synchronous
//fs.writeFileSync("./test.txt", "Hey There!");


//Asynchronous
//fs.writeFile("./test2.txt", "Hey There! Asynchronous yehh hh", (err) =>{});


// Read File Synchronous.
const result = fs.readFileSync("./read.txt", "utf8");
console.log(result);