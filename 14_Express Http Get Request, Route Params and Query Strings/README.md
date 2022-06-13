## Express Http Get Request, Route Params and Query Strings

*Query Strings And Route Parameters*<br />
http://localhost:3000/example/Martin/40?tutorial=Yeah&node=Great<br />
xxxxxxxxxxxxxxxxxxxxx/example/:name/:age<br />
**`Name` And `Age` are `Route Parameters`, and `tutorial` and `node` are `query parameters`.**

> **_Name and age are route parameters_** <br />
// http://localhost:3000/example/`Martin`/`40`?`tutorial=Yeah`&`node=Great` <br />
app.get('/example/:name/:age', (req, res) => {<br />
    console.log(`req.params`);<br />
    console.log(`req.query`)<br />
    res.send("Express Http Get Request, Route Params and Query Strings");<br />
});<br />



