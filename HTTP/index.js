//Multiple Routes
//Logging the request in a file
//Using fs module to write the log in a file
//Using appendFile method to append the log in the file
//Using switch case to handle multiple routes
//Using req.url to get the requested url


const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("./Log.txt", log, (err, data) => {

        switch(req.url){
            case '/': res.end("Home Page");
            break
            case '/about': res.end("Hi I am Shuvam Mandal");
            break
            default: res.end("404 Page not found.");
        }
        //res.end("Hello from server, Again.");
    });

    //console.log(req.headers);
    
});

myServer.listen(9000, () => console.log("Server is running on port 9000"));