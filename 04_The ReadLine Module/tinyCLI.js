const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'MARTIN> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`You are '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good Bye!');
  process.exit(0);
});