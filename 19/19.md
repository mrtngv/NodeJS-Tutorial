## User Input Validation with JOI Validating Nested Object and Arrays

*If There are complex object, it is more convinient to break them up to diiferent schemas and then combine them into single one.*
> **_Import joi module_**</br> const joi = require('joi'); </br>


> **_Hardcoded UserInput For example_**</br> const foodArray = ['pizza', 'musaka', 'burgers'];</br>
const objectsArray = [
    { name: "Sasuke", age: -2 }, // `ERROR: AGE IS LESS THAN 3.`</br>
    { name: "Itachi", age: 4 }];
</br>
const userInput = {</br>
    personalInfo: {
        address: "Japan, 404",
        name: "Hello World",
        state: "F1"
    },</br>
    prefferences: foodArray,</br>
    arrayOfObjects: objectsArray</br>
};</br>

> **_Create the personal Info Schema_**</br>
const personalInfoSchema = joi.object().keys({</br>
    address: joi.string().trim().required(),</br>
    name: joi.string().trim().required(),</br>
    state: joi.string().trim().length(2).required()</br>
});</br>


> **_Create the prefferences Schema_**</br>
const prefferencesSchema = joi.`array()`.items(`joi.string()`); // all items in the array are strings</br>

> **_Create the objectsArray Schema_**</br>
const objectsArraySchema = joi.`array()`.items(`joi`.`object()`.`keys`({ // array of objects with given keys</br>
    name: joi.string().required(),</br>
    age: joi.`number()`.min(0).max(100).required()</br>
}));</br>

> **_Combine them_**</br>
const schema = joi.object().keys({</br>
    personalInfo: personalInfoSchema,</br>
    prefferences: prefferencesSchema,</br>
    arrayOfObjects: objectsArraySchema</br>
});</br>

> **_Validate_**</br>
const { error, value } = schema.validate(userInput);</br>
if (error) {
    console.log(error);</br>
} else {
    console.log(value);
}</br>