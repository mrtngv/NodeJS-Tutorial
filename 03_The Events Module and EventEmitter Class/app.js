const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('example', (num1, num2) => {
    console.log("The sum is: " + (num1 + num2));
})

eventEmitter.emit('example', 2, 3);

/*
    Example with class:
    The custom class extends the EventEmitter class, so it can have the event module.
    The event module is build in in node js.
*/

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

var nameFunction = function (name) {
    console.log("My name is " + name);
}

const john = new Person("John");
const petra = new Person("Petra");

john.on('name', nameFunction)
petra.on('name', nameFunction)
john.emit('name', john.name);
petra.emit('name', petra.name);