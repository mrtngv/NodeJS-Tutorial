const fs = require('fs')
const zlib = require('zlib'); // module for compression, compressing files.

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./7/dummy.txt', 'utf8');
const writeStream = fs.createWriteStream('./7/write.txt.gz');

/* 
    In order to use pipe, we need a source stream and a destination stream 
    Transform Stream -> Takes the input and when it receives that data, it manipulates that data into something else.
    It compresses the file, open it in explorer. 
    This example will compress the file.
*/
readStream.pipe(gzip).pipe(writeStream);

/* 
    This example will uncompress the file 
*/

//const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./7/write.txt.gz');
// const writeStream = fs.createWriteStream('./7/write.txt');
// readStream.pipe(gunzip).pipe(writeStream);
