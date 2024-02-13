const figlet = require('figlet');

figlet("HELLO WORLd !", function(err, data){
    if(err){
        console.log("Someting went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})