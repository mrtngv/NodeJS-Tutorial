const http = require('http');
const fs = require('fs');

/* 
    Content Types:
        - text/html
        - application/json
        - image/png 
*/

const server = http.createServer((req, res) => {
    let readStream;
    console.log(req.url)
    switch (req.url) {
        case "/json":
            readStream = fs.createReadStream('./9/static/example.json');
            res.writeHead(200, { 'Content-type': 'application/json' });
            break;
        case "/image":
            readStream = fs.createReadStream('./9/static/flag.png');
            res.writeHead(200, { 'Content-type': 'image/png' });
            break;
        default:
            readStream = fs.createReadStream('./9/static/index.html');
            res.writeHead(200, { 'Content-type': 'text/html' });
            break;
    }
    readStream.pipe(res);
})

server.listen('3000');