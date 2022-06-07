## Start working with Express Web Framework

*Express is a web framework for node js* **https://expressjs.com/**

1. npm init `-yes` - `-yes` flag means skip questions 
2. npm install `express`.

> **_Import express_** <br />
const express = require('express');<br />
const app = express();<br />
<br />
app.get('/', (req, res) => {<br />
    res.send('Hello World! From Express js');<br />
});<br />

> **_Listen on port 3000_** <br />
app.listen(3000);