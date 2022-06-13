## User Input Validation with Express and JOI

**JOI**
*joi lets you describe your data using a simple, intuitive, and readable language*
*Documentation : https://joi.dev/api/?v=17.6.0*

1. **Install joi**: - `npm install joi`.
> **_Import joi module_**</br> const joi = require('joi'); </br>

2. **_Usage of Joi in validation of the form data_** - 
*In order to validate the data from the form we are going to create a schema.A schema is a blueprint, a set of rules that we want our data to have.*

> **_Define The Schema_**</br> 
const schema = `joi`.`object()`.`keys`({</br> 
        username: joi.string().trim().email().required(),</br> 
        password: joi.string().min(5).max(20).required()</br> 
}); </br>

> **_Validate_**</br> 
const resJson = { username: req.body[0].value, password: req.body[1].value };</br>
const { `error`, `value` } = schema.`validate`(resJson);</br>
}); </br>

*If the form data is valid, then the error will be `undefined` and If the form data is invalid - email or password, error is assigned a ValidationError object giving details. In our case ic could be, that the Email is not valid email, or password is less than 5 char long , or greater than 20 char long.*