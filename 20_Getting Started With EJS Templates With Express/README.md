## Getting Started With EJS Templates With Express.

#### <%= EJS %>
*Embedded JavaScript templating. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript - https://ejs.co/* 

1. **Install EJS**: - `npm install ejs`.
> **_Example in HTML File:_**<br/><% if (user) { %><br/>
`<h2>`<%= user.name %>`</h2>`<br/>
<% } %><br/>

2. It looks for a folder `views`, where are stored the templates with prefix: `ejs`. 
3. Here we have `index.ejs`:
> `<H1>`HTML Clown Templete: <%= `data.userQuery` %>`</H1>` <br/>
<% if(data.loggedIn) { %><br/>
`<h3>` You are logged In.`</h3>`<br/>
            `<h1>` <%= data.username %> `</h1>`<br/>
        <% } %><br/>
        `<ul class="red">`<br/>
            <% data.searchResults.forEach(result=> { %><br/>
                `<li class="green">`<%= result %>`</li>`<br/>
                <% }); %><br/>
          `</ul>`<br/>

4. It starts with the tag `<%` and ends with `%>` wehn writing logic
5. If you want real data to be displayed: `<%=` `{data}`
6. Set templates to ejs:
> app.set('view engine', 'ejs');<br/>
app.engine('ejs', require('ejs').__express);<br/>

1. Render the template.
> app.get("/`:userQuery`", (req, res) => {<br/>
`res`.`render`('`index`', { // name of the template<br/>
        `data`: {<br/>
            userQuery: req.params.userQuery,<br/>
            searchResults: ['hello', 'world', '!'],<br/>
            loggedIn: true,<br/>
            username: "mr.M"<br/>
        }<br/>
    });<br/>
});<br/>


