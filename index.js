const http = require ("http");
const fs = require('fs');

fs.writeFileSync('data.txt' ,'Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.');

fs.appendFileSync('data.txt','It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.');



const Server =http.createServer(function(req,res){
    res.write("<h1>My first server</h1>");
    res.write(JSON.stringify(["name:Madhu"]));
    res.end();
})
Server.listen(4000);