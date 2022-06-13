## Working with File System Module (Creating, Reading, Deleting, Renaming Files)

**Files.js**

*The File System Module allows us to work with the file systyem - create files ,read ,delete ,create folders and stuff like that*

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


## Working with File System Module (Creating, Reading, Deleting Directories)

**Directories.js**

*The File System Module allows us to work with the file systyem - create files ,read ,delete ,create folders and stuff like that.*

> **_Import the File System Module_** <br />const fs = require('fs');

1. **fs.mkdir** - *Creates Directory if the Directory doesn't exist*
> fs.mkdir('tutorial', (err) => {<br />
if (err)<br />
        console.log(err);<br />
    else<br />
        console.log("Successfully created the folder");<br />
});<br />

2. **fs.rmdir** - *Removes empty directory, otherwise it will throw an error*
> fs.rmdir('tutorial', (err) => {<br />
if (err)<br />
        console.log(err);<br />
    else<br />
        console.log("Successfully deleted the folder");<br />
});<br />

3. Example of making a directory with a file in it.
> fs.mkdir('tutorial', (err) => {<br />
if (err)<br />
        console.log(err);<br />
    else {<br />
        console.log("Successfully created the folder");<br />
        fs.writeFile('./tutorial/example.txt', "this is example data", (err) => {<br />
            if (err)<br />
                console.log(err);<br />
            else<br />
                console.log("Successfully created the file inside the directory");<br />
        })<br />
    }<br />
});<br />

4. Example of deleting a directory with a multiple files in it.
> `fs.readdir`('tutorial', (err, `files`) => {<br />
if (err)<br />
        console.log(err);<br />
    else {<br />
        console.log(files); // all files in this directory<br />
        for (let file of files) { // loop through all files in this directory and delete them.<br />
            fs.unlink(('./tutorial/' + file), (err) => {<br />
                if (err)<br />
                    console.log(err);<br />
                else<br />
                    console.log(`Successfully Deleted the file ${file} from tutorial directory`);<br />
            })<br />
        }<br />
        fs.rmdir('tutorial', (err) => { // then remove the directory when it is empty.<br />
            if (err)<br />
                console.log(err);<br />
            else<br />
                console.log("Successfully deleted the folder");<br />
        });<br />
    }<br />
})<br />