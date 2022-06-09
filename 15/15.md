## Serving Static Files using Express.

*Static Files*
1. HTML files
2. CSS Files
3. Client side JavaScript
4. Images
5. Video
6. etc

*It's a good idea to put the Node.js application behind a proxy for example: `Nginx`* 

I have a static folder, wtih css/style.css and js/script.js which are called from index.html. There the path begins with `public`.

> **_Import express_** <br />const express = require('express');<br/>

> **_Import path_** <br />const path = require('path');<br/>
*Path module just to be easier to work with paths.*<br/>

> const app = express();<br/>

> app.`use`('/public', `express.static`(path.join(__dirname, 'static')));<br/><br/>
Whereever you see app.use = it means I `use middleware`<br/>
The first argument is an `allias`, because i don't want people to know that this directory is called static., so i give an allias 'public.'<br/>
The second argument is going to be a `middleware function` In our case this is an build-in middleware function, which serves static files.<br/>
`__dirname` is a variable and tells us where are we.<br/><br/>

> app.get("/", (req, res) => { <br/>
console.log(__dirname);<br/>
    res.`sendFile`(path.join(__dirname, 'static', 'index.html'));<br/>
});<br/>
<br/>
app.listen(3000);<br/>