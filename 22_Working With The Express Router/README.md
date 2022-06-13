## Working With The Express Router
*The express router allow us to separate our routes into `different files`. This makes the code more readable and manageble, as opposed to just writing the routes in the `app.js` file* 

1. Create folder `routes` for example - where we are going to store different files with the coresponding logic for the route.
2. Create file `students.js`
> const express = require('express');<br/>
const route = `express`.`Router()`;<br/>

> **_Own middleware_** <br/> route.use((req,res,next)=> {<br/>
    console.log("Middleware being used");<br/>
    next();<br/>
})<br/>

> route.get('/', (req, res) => {<br/>
res.send('/ being hit');<br/>
});<br/>

> route.get('/example', (req, res) => {<br/>
res.send('/example being hit');<br/>
});<br/>

> **_Export_** <br/>module.exports = route;<br/>

3. In `app.js`

> **_Import the module_** <br/> const students = require('./routes/students');<br/>

> **_Use the route_** <br/> app.use('/students', students);<br/>



