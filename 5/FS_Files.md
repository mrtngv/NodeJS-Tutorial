## Working with File System Module (Creating, Reading, Deleting, Renaming Files)

**Files.js**

*The File System Module allows us to work with the file systyem - create files ,read ,delete ,create folders and stuff like that.*

> **_Import the File System Module_** <br />const fs = require('fs');

1. **fs.writeFile** - *Creates File if the file doesn't exist and overrides the data.*

> fs.writeFile('example.txt', "this is an example", (err) => {<br />
 if (err)<br />
        console.log(err)<br />
    else<br />
        console.log("File successfully created");<br />
});<br />

2. **fs.readFile** - *Reads the data of the file. If encoding is not passed it will print the data binary.*
> fs.readFile('example.txt', 'utf8', (err, file) => {<br />
if (err)<br />
        console.log(err)<br />
    else<br />
        console.log(file);<br />
});<br />

3. **fs.rename** - *Renames the file.*
> fs.rename('example.txt', 'example2.txt', (err) => {<br />
if (err)<br />
        console.log(err);<br />
    else<br />
        console.log("Successfully renamed the file");<br />
});<br />

4. **fs.appendFile** - *Create file if doesn't exist and Append data to end of the file.*
> fs.appendFile('example2.txt', '\nsome additional data', (err) => {<br />
if (err)<br />
        console.log(err);<br />
    else<br />
        console.log("Successfully appended data to file");<br />
});<br />

5. **fs.unlink** - *Deletes the file.*
> fs.unlink('example2.txt', (err) => {<br />
if (err)<br />
        console.log(err);<br />
    else<br />
        console.log("Successfully deleted the file");<br />
});<br />
