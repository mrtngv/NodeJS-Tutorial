const express = require('express');
const path = require('path'); // Path module just to be easier to work with paths.
const bodyParser = require('body-parser');
const joi = require('joi');

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
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    /* 
        In order to validate the data from the form we are going to create a schema
        A schema is a blueprint, a set of rules that we want our data to have.
     */

    const schema = joi.object().keys({
        username: joi.string().trim().email().required(),
        password: joi.string().min(5).max(20).required()
    });
    const resJson = { username: req.body[0].value, password: req.body[1].value };
    const validation = schema.validate(resJson);
    if (validation.error) {
        res.send(`Validation Error: ${validation.error.details[0].message}`);
    } else {
        res.send(`The Data is Successfully Validated:`);
    }
})

app.listen(3000);

