const http = require("http");

const port = 3001;
const hostname = "127.0.0.1"

const server = http.createServer((req, res) => {
    res.statusCode = 201;
    res.write("Nodejs modul is started!")
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`This server is working on ${port} `)
});