const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {

    
    // switch(req.url) {
    //     case "/" :
    //         res.end("Home Page");
    //     break;
        
    //     case "/about" :
    //         res.end("Hi i am Shuvam Mandal");
    //     break;
        
    //     case "/contact" :
    //         res.end("Contact me at shuuvam.mandal09@gmail.com");
    // }

    if(req.url === "/") {
        fs.readFile("index.html", "utf-8", (err, data) => {
            if(err) {
                res.end("Error");
            } else {
                res.end(data);
            }
        })  
    }

    if(req.url === "/about"){
        fs.readFile("about.html", "utf-8", (err, data) => {
            if(err){
                res.end(err);
            } 
            else{
                res.end(data);
            }
        })
    }

    if(req.url === "/contact"){
        fs.readFile("contact.html","utf-8",(err,data) => {
            if(err){
                res.end(err);
            }
            else{
                res.end(data);
            }
        })
    }
} )

myServer.listen(3000, () => console.log("Server is strated at 3000."));