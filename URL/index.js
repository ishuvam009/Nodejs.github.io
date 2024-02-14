const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {
    switch(req.url) {
        case "/" :
            res.end("Home Page");
        break;
        
        case "/about" :
            res.end("Hi i am Shuvam Mandal");
        break;
        
        case "/contact" :
            res.end("Contact me at shuuvam.mandal09@gmail.com");
    }
} )

myServer.listen(3000, () => console.log("Server is strated at 3000."));