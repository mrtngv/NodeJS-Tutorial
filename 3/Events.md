## Node.js Events

**Events in Node.js**
* Every action on a computer is an event. Like when a connection is made or a file is opened. Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

> **_Example:_**  <br /><br /> var fs = require('fs'); <br />
var rs = fs.createReadStream('./demofile.txt'); <br />
rs.on('open', function () { <br />
  console.log('The file is open'); <br />
}); <br />

**Events Module**
* Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

> **_Example:_**  <br /><br /> var events = require('events'); <br />
var eventEmitter = new events.EventEmitter(); <br />

**The EventEmitter Object**
* You can assign event handlers to your own events with the EventEmitter object.
In the example below we have created a function that will be executed when a "scream" event is fired.
To fire an event, use the emit() method.

> **_Example:_**  <br /><br /> var events = require('events'); <br />
var eventEmitter = new events.EventEmitter(); <br />
//Create an event handler: <br />
var myEventHandler = function () { <br />
  console.log('I hear a scream!'); <br />
} <br />
//Assign the event handler to an event: <br />
eventEmitter.on('scream', myEventHandler); <br />
//Fire the 'scream' event: <br />
eventEmitter.emit('scream'); <br />

*Source: https://www.w3schools.com*

