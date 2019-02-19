function calculate(answer){
  answer = answer.split(' ')
  const 
    x = +answer[0], 
    y = +answer[1], 
    z = +answer[2];
  const exponentNumerator = (x - y) ** 2;
  if(exponentNumerator === 0 || z === 0) {
    rightPart = 0;
  } else {
    rightPart = (exponentNumerator / (2 * (z ** 2)));
  } 
  const leftPart = 1 / (z * (2 * Math.PI) ** 0.5);
  const result = leftPart * (Math.E ** rightPart);
  return `Output: ${result}`;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input parameters: `, (answer) => {
  console.log(calculate(answer));
  readline.close()
})