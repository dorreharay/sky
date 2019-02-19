const compareBrackets = value => {
  const arr = value.split('');
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] === ')' ? counter-- : counter++;
  }
  return `Output: ${counter === 0 ? 'YES' : 'NO'}`;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input parameters: `, (answer) => {
  console.log(compareBrackets(answer))
  readline.close()
})