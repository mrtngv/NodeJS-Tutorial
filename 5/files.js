const fs = require('fs');

// Creates File if the file doesn't exist and overrides the data.
fs.writeFile('example.txt', "this is an example", (err) => {
    if (err)
        console.log(err)
    else
        console.log("File successfully created");
});

// Reads the data of the file. If encoding is not passed it will print the data binary.
fs.readFile('example.txt', 'utf8', (err, file) => {
    if (err)
        console.log(err)
    else
        console.log(file);
});

// Renames the file
fs.rename('example.txt', 'example2.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log("Successfully renamed the file");
});

// Create file if doesn't exist and Append data to end of the file.
fs.appendFile('example2.txt', '\nsome additional data', (err) => {
    if (err)
        console.log(err);
    else
        console.log("Successfully appended data to file");
});

// Deletes the file * Comment this code 
fs.unlink('example2.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log("Successfully deleted the file");
});