## Pipes and Pipe Chaining

*What a Pipes allow us to do is to taka a source stream, which is just a readable stream, and send it over to his destination,. which is just a writable stream*

From '`./6/app.js'`, only modify the writing with a pipe.

> **_Import the File System Module_** <br />const fs = require('fs');
> **_Import the Module for compression, compressing files_** <br />const zlib = require('zlib')

1. 
> **_Read Stream_** <br /> const readStream = fs.`createReadStream`('./6/dummy.txt', 'utf8'); <br /> 
> **Write Stream_** <br /> const writeStream = fs.`createWriteStream`('./6/write.txt'); <br /> 
> readStream.pipe(writeStream)<br />

2. This example will compress the file.
> const gzip = zlib.createGzip();<br />
const readStream = fs.createReadStream('./7/dummy.txt', 'utf8');<br />
const writeStream = fs.createWriteStream('./7/write.txt.gz');<br />
readStream.pipe(gzip).pipe(writeStream);<br />

3. This example will uncompress the file.
> const gunzip = zlib.createGunzip(); <br />
> const readStream = fs.createReadStream('./7/write.txt.gz');<br />
> const writeStream = fs.createWriteStream('./7/write.txt');<br />
> readStream.pipe(gunzip).pipe(writeStream);<br />
