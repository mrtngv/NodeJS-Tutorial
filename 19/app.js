const joi = require('joi');

const foodArray = ['pizza', 'musaka', 'burgers'];
const objectsArray = [
    { name: "Sasuke", age: -2 },
    { name: "Itachi", age: 4 }];

const userInput = {
    personalInfo: {
        address: "Japan, 404",
        name: "Hello World",
        state: "F1"
    },
    prefferences: foodArray,
    arrayOfObjects: objectsArray
};

/* 
    If There are complex object, 
    it is more convinient to break them up to diiferent schemas 
    and then combine them.
*/
const personalInfoSchema = joi.object().keys({
    address: joi.string().trim().required(),
    name: joi.string().trim().required(),
    state: joi.string().trim().length(2).required()
});

const prefferencesSchema = joi.array().items(joi.string()); // all items in the array are strings

const objectsArraySchema = joi.array().items(joi.object().keys({ // array of objects with given keys
    name: joi.string().required(),
    age: joi.number().min(0).max(100).required()
}));

const schema = joi.object().keys({
    personalInfo: personalInfoSchema,
    prefferences: prefferencesSchema,
    arrayOfObjects: objectsArraySchema
});

const { error, value } = schema.validate(userInput);
if (error) {
    console.log(error);
} else {
    console.log(value);
}