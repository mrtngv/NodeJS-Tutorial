const fs = require('fs');

// Makes directory
fs.mkdir('tutorial', (err) => {
    if (err)
        console.log(err);
    else
        console.log("Successfully created the folder");
});

// Removes empty directory, otherwise it will throw an error
fs.rmdir('tutorial', (err) => {
    if (err)
        console.log(err);
    else
        console.log("Successfully deleted the folder");
});

// Example of making a directory with a file in it.
fs.mkdir('tutorial', (err) => {
    if (err)
        console.log(err);
    else {
        console.log("Successfully created the folder");

        fs.writeFile('./tutorial/example.txt', "this is example data", (err) => {
            if (err)
                console.log(err);
            else
                console.log("Successfully created the file inside the directory");
        })
    }
});

// Example of deleting a directory with a multiple files in it.
fs.readdir('tutorial', (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log(files); // all files in this directory

        for (let file of files) { // loop through all files in this directory and delete them.
            fs.unlink(('./tutorial/' + file), (err) => {
                if (err)
                    console.log(err);
                else
                    console.log(`Successfully Deleted the file ${file} from tutorial directory`);
            })
        }

        fs.rmdir('tutorial', (err) => { // then remove the directory when it is empty.
            if (err)
                console.log(err);
            else
                console.log("Successfully deleted the folder");
        });
    }
})

