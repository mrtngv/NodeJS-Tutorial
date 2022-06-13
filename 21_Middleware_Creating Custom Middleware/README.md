## How does MiddleWare Work and Creating Custom Middleware

*Middleware is the code that gets executed between the user request and the server.*
*`app.use`*

1. `app.use` takes:
    - path
    - req
    - res
    - next

*When path is not specified the code in the middleware function is executed every time.*
> `app.use`(`'/middleware'`, (`req`,`res`,`next`)=> {<br/>
req.user = "mr. M";<br/>
    console.log(req.url, req.method);<br/>
    `next();` // **_We have to call the next() function in order to tell that we are done exectuing the request_**<br/>
});<br/>