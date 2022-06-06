## Readable And Writable Streams and why You should use Streams
*The Readable And Writable Streams allow us to be able to read and write data more efficiently.*
*Reading and Writing data*

**Streams are loading a chunk piece of data at a time, Instead of loading the full file**
*This way you can work with big files, while the readFile and writeFile cannot work with big files, because they want the load* *the file first and then work with it.* 

readFile, writeFile -> full buffer.
Streams -> smaller buffer size - memory efficient.

> **_Import the File System Module_** <br />const fs = require('fs');

> **_Read Stream_** <br /> const readStream = fs.`createReadStream`('./6/dummy.txt', 'utf8'); <br /> 
> **Write Stream_** <br /> const writeStream = fs.`createWriteStream`('./6/write.txt'); <br /> 

> **write on `data` Event** <br /> readStream.on('data', (chunk)=> { // chunk -> piece of data <br /> 
  console.log(chunk);<br /> 
    writeStream.write(chunk);<br /> 
})<br /> 
