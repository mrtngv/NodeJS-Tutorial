## The Events Module and EventEmitter Class

*The Events Module is build in in Node JS and helps us bring the Event driven Programming*

1. Import the events module.
> const EventEmitter = require('events'); <br />
const eventEmitter = new EventEmitter(); <br />

2. On `example` event -> call functiion () => {}

> eventEmitter.on('example', (num1, num2) => { <br />
console.log("The sum is: " + (num1 + num2)); <br />
})

3. Then `emit` the "example" event: 
> eventEmitter.emit('example', 2, 3);

**Example with class:**
*The custom class extends the EventEmitter class, so it can have the event module.*

> **_Class Definition_** <br /> class Person extends EventEmitter { <br />
constructor(name) { <br />
        super(); <br />
        this._name = name;<br />
    }<br />
<br />
    get name() {<br />
        return this._name;<br />
    }<br />
}<br />

> **_Define the function callBack_** <br /> var nameFunction = function (name) {<br /> 
console.log("My name is " + name); <br /> 
}<br /> 

> **_Create instance of the object and attach the callBack function on the event_** <br /> const martin = new Person("Martin");<br />
john.on('name', nameFunction)<br />

> **_emit the event_** <br />john.emit('name', john.name);<br />
