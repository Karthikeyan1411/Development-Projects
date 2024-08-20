// Importing the http module
const http = require('http');

// Creating Simple Server
const server = http.createServer((req, res) => {
    // Handling Incoming Request
    res.writeHead(200, {'Content-Type' : 'text/plain'}); // 200 means web page rendering without any mistakes
    res.end("Hello, this is NodeJS Server!\n");
});

// Setting port for server to listen
const port = 3000;

// Making the server listen on the specified port
server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
})