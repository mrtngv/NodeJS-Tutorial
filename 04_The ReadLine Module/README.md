## The ReadLine Module

**The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.**
**The Node.js application will not terminate until thereadline.Interface is closed because the interface waits for data to be received on the input stream**

1. The <ins>**_readline.createInterface()_**</ins> method creates a new readline.Interfaceinstance.

> const readline = require('readline');</br>
const rl = readline.createInterface({</br>
  input: process.stdin,</br>
  output: process.stdout</br>
});</br>

Once the readline.Interface instance is created, the most common case is to listen for the <ins>**_'line'_**</ins> event:

> rl.on('line', (line) => {</br>
  console.log(`Received: ${line}`);</br>
});</br>

*If terminal is true for this instance then the output stream will get the best compatibility if it defines an output.columns property and emits a 'resize' event on the output if or when the columns ever change (process.stdout does this automatically when it is a TTY).*

*When creating a readline.Interface using stdin as input, the program will not terminate until it receives EOF (Ctrl+D on Linux/macOS, Ctrl+Z followed by Return on Windows). If you want your application to exit without waiting for user input, you can unref() the standard input stream:*

process.stdin.unref();

1. The <ins>**_rl.question()_**</ins> method displays the query by writing it to the output, waits for user input to be provided on input, then invokes the callbackfunction passing the provided input as the first argument.

When called, <ins>**_rl.question()_**</ins> will resume the input stream if it has been paused.

If the readline.Interface was created with output set to null orundefined the query is not written.

The callback function passed to rl.question() does not follow the typical pattern of accepting an Error object or null as the first argument. <ins>**_The callback is called with the provided answer as the only argument._**</ins>

Example usage:

> rl.question('What is your favorite food? ', (answer) => {</br>
  console.log(`Oh, so your favorite food is ${answer}`);</br>
});</br>

Using an AbortController to cancel a question.

> const ac = new AbortController();<br/>
const signal = ac.signal;<br/><br/>
rl.question('What is your favorite food? ', { signal }, (answer) => { <br/>
  console.log(`Oh, so your favorite food is ${answer}`);<br/>
});<br/><br/>
signal.addEventListener('abort', () => {<br/>
  console.log('The food question timed out');<br/>
}, { once: true });<br/><br/>
setTimeout(() => ac.abort(), 10000);<br/><br/>
*If this method is invoked as it's util.promisify()ed version, it returns a Promise that fulfills with the answer. If the question is canceled using an AbortController it will reject with an AbortError.*

> const util = require('util');</br>
const question = util.promisify(rl.question).bind(rl);</br></br>
async function questionExample() {</br>
  try {</br>
    const answer = await question('What is you favorite food? ');</br>
    console.log(`Oh, so your favorite food is ${answer}`);</br>
  } catch (err) {</br>
    console.error('Question rejected', err);</br>
  }</br>
}</br>
questionExample();

3. The <ins>**_rl.setPrompt()_**</ins> method sets the prompt that will be written to outputwhenever rl.prompt() is called.

The <ins>**_rl.prompt()_**</ins> method writes the readline.Interface instances configuredprompt to a new line in output in order to provide a user with a new location at which to provide input.

When called, <ins>**_rl.prompt()_**</ins> will resume the input stream if it has been paused.

If the readline.Interface was created with output set to null orundefined the prompt is not written.

*Source: Node JS Documentation<br />https://nodejs.org/docs/v14.17.6/api/readline.html*