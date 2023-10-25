const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    if(request.method === 'GET' && request.url === "/home"){
        response.write("Hey there from my first http server. This is the /home endpoint");
    }
    else if(request.method === 'GET' && request.url === "/login"){
        response.write("Hey there from my first http server. This is the /login endpoint");
    }
    else{
        response.write("404 Page not found!");
    }
    response.end();
});

server.listen(3000, () => {
    console.log("The server is running in port 3000.");
});

// Listening on localhost:3000
// Listening on 127.0.0.1:3000