const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/middleware', (req,res,next)=> {
    req.user = "mr. M";
    console.log(req.url, req.method);
    next();
});

app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
})

app.get('/', (req, res) => {
    res.send('Middleware Page');
});

app.get('/middleware', (req, res) => {
    res.send(req.user);
});

app.listen(3000);