## Serving Static Files Using the Http Module and The Filer System Module.

> **_Import the Http Module_** <br />const http = require('http');
> **_Import the File System Module_** <br />const fs = require('fs');

**In the Static Folder i Have 3 Files:**

1. index.html - Here I have links to the other 2 files.
2. example.json
3. flag.png


**I want to be able to switch from the image, json, and html**

> **_Create the Server_** <br />
const server = http.createServer((req, res) => {<br />
    let readStream;<br />
    console.log(req.url)<br />
    switch (req.url) {<br />
        case "/json":<br />
            readStream = fs.createReadStream('./9/static/example.json');<br />
            res.writeHead(200, { 'Content-type': 'application/json' });<br />
            break;<br />
        case "/image":<br />
            readStream = fs.createReadStream('./9/static/flag.png');<br />
            res.writeHead(200, { 'Content-type': 'image/png' });<br />
            break;<br />
        default:<br />
            readStream = fs.createReadStream('./9/static/index.html');<br />
            res.writeHead(200, { 'Content-type': 'text/html' });<br />
            break;<br />
    }<br />
    > **_Pipe the ReadStream to Res, which is also a Stream._** <br />
    readStream.pipe(res);<br />
})<br />
> **_Listen on port 3000_** <br />server.listen('3000');<br />
