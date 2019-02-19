function checkTriangle(answer) {
	answer = answer.split(' ')
	const 
    x = +answer[0], 
    y = +answer[1], 
    z = +answer[2];
	const p = (x + y + z) / 2;
	const result = Math.sqrt(p*(p - x)*(p - y)*(p - z));
  return `Output: ${result > 0 ? 'triangle' : 'no triangle'}`;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input parameters: `, (answer) => {
  console.log(checkTriangle(answer));
  readline.close()
})