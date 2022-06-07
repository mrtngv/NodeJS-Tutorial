const express = require('express');
const app = express();

/*
    http://localhost:3000
*/
app.get('/', (req, res) => {
    res.send('Hello World! From Express js');
});

/*
    http://localhost:3000/example
*/
app.get('/example', (req, res) => { // another route
    res.send('Hello From Example');
});

/*
    Request with Params:
    http://localhost:3000/example/Martin/40
    #############################################
    Request with Params and Query :
    http://localhost:3000/example/Martin/40?tutorial=Yeah&node=Great
*/
app.get('/example/:name/:age', (req, res) => { // another route
    console.log(req.params);
    console.log(req.query)
    const responseString = `Example wit route params. 
                            Name is ${req.params.name}
                            Age is ${req.params.age}
                            Query is ${req.query}`;
    res.send(responseString);
});

app.listen(3000);