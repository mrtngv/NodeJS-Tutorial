const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    } else {
        res.write('Hello World from not root!');
        res.end();
    }
})

server.listen('3000');