const fs = require("fs");

//Synchronous
//fs.writeFileSync("./test.txt", "Hey There!");


//Asynchronous
//fs.writeFile("./test2.txt", "Hey There! Asynchronous yehh hh", (err) =>{});


// Read File Synchronous.
// const result = fs.readFileSync("./read.txt", "utf8");
// console.log(result);

//Read File Asynchronous

// fs.readFile("./read.txt","utf8",(err,result) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// });


//Append File Synchronous
fs.appendFileSync("./read.txt",`\n${Date.now()}, Hey There!`);

// //Copy a file.
// fs.cpSync("./read.txt","./read2copy.txt");

// //Delete a file.
// fs.unlinkSync("./read2copy.txt");


