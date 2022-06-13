const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! From Express js');
});

app.listen(3000);