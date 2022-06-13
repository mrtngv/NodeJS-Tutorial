## Creating HTTP Server using the Http Module

> **_Import the Http Module._** <br />const http = require('http');

> const server = `http.createServer`((`req`, `res`) => {<br />
console.log(req.url)<br />
    if(`req.url` === '/') {<br />
        `res.write`('Hello World');<br />
        `res.end()`;<br />
    } else {<br />
        res.write('Hello World from not root');<br />
        res.end();<br />
    }<br />
})<br />
`server.listen('3000');`<br />