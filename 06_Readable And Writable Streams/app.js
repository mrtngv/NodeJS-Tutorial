const fs = require('fs');
const readStream = fs.createReadStream('./6/dummy.txt', 'utf8');
const writeStream = fs.createWriteStream('./6/write.txt');

readStream.on('data', (chunk)=> { // chunk -> piece of data
    console.log(chunk);
    writeStream.write(chunk);
});