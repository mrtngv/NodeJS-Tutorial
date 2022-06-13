const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const num1 = Math.floor((Math.random() * 10) + 1);
const num2 = Math.floor((Math.random() * 10) + 1);
const answer = num1 + num2;

rl.question(`What is ${num1} + ${num2} ? \n==> `,
    (userInput) => {
        if (userInput.trim() == answer) {
            rl.close();
        } else {
            rl.setPrompt('Incorrect response! Please try again!\n==>');
            rl.prompt();
            rl.on('line', (userInput) => {
                if (userInput.trim() == answer) {
                    rl.close();
                } else {
                    rl.setPrompt(`Your answer of ${userInput} is incorrect. Try again!\n==>`);
                    rl.prompt();
                }
            })
        }
    });

rl.on('close', () => { console.log("Correct answer!") });

// rl.on('line', () => {
//      console.log("Cursor Position is " + rl.getCursorPos().cols)
// });