## Http Post Request using Express and Body Parser Module

*In order to use the Body-Parser module, which we will use to parse the form data, we need to install it with `npm install body-parser`*<br/>
*Post Request is tipically used when working with inputs/forms.*<br />

## index.html: <br/>
*There is an post form to / with labels: `username` and `password`. The body parser module will help to parse this data, and will keep the labels as object attributes:*

> { </br>
username: "hello",</br>
    password: "world!"</br>
}</br>

## app.js:

> **_Import express and path_** <br />const express = require('express');<br/>
const path = require('path');<br/>


> **_Import body Parser module_** <br />const bodyParser = require('body-parser');<br/>

> const app = express();<br/>
app.use('/public', express.static(path.join(__dirname, 'static')));<br/>


*Allowing to parse URL encoded forms. It parses the data and attaches it to the request body. The extended option is set to false, because we are not dealing with complicated objects for now. We have only username and password, which are both strings.*

> app.use(bodyParser.urlencoded({extended: false}));

> app.get("/", (req, res) => {<br/>
console.log(__dirname);<br/>
    res.sendFile(path.join(__dirname, 'static', 'index.html'));<br/>
});<br/>

*Access the body of the request through `req.body`.
> app.post('/', (req, res) => {<br/>
 console.log(req.body);<br/>
    // validation and db work<br/>
    res.send(`Successfully posted data ${req.body.username} --->  ${req.body.password}`);<br/>
})<br/>
app.listen(3000);<br/>




