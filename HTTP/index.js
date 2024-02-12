const http = require("http");

const myServer = http.createServer((req,res) => {
    console.log("New Req Receive.");
    res.end("Hello from server.");
});

myServer.listen(9000, () => console.log("Server is running on port 9000"));