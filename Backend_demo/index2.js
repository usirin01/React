const http = require("http");

const port = 3002;
const hostname = "127.0.0.1"

const server = http.createServer((reguest, response) => {
    res.statusCode = 202;
    response.write("Hi");
    response.end();
});

server.listen(port,hostname, () => {
    console.log(`Ok ${port}`)
});