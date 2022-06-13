const express = require('express');
const path = require('path'); // Path module just to be easier to work with paths.
const bodyParser = require('body-parser');

const app = express();
/* 
    Whereever you see app.use = it means I use middleware
    1. The first argument is an allias, because i don't want people to know that 
    this directory is called static., so i give an allias 'public.'
    2. The second argument is going to be a middleware function
    In our case this is an build-in middleware function, which serves static files.
*/
app.use('/public', express.static(path.join(__dirname, 'static')));

/*
    Allowing to parse URL encoded forms.
    It parses the data and attaches it to the request body.
    The extended option is set to false, because we are not dealing with complicated objects for now.
    We have only username and password, which are both strings.
*/
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // validation and db work
    res.send(`Successfully posted data ${req.body.username} --->  ${req.body.password}`);
})

app.listen(3000);