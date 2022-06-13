const express = require('express');
const path = require('path'); // Path module just to be easier to work with paths.

const app = express();
/* 
    Whereever you see app.use = it means I use middleware
    1. The first argument is an allias, because i don't want people to know that 
    this directory is called static., so i give an allias 'public.'
    2. The second argument is going to be a middleware function
    In our case this is an build-in middleware function, which serves static files.
*/
app.use('/public', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.get("/:userQuery", (req, res) => {
    res.render('index', {
        data: {
            userQuery: req.params.userQuery,
            searchResults: ['hello', 'world', '!'],
            loggedIn: true,
            username: "mr.M"
        }
    });
});

app.listen(3000);