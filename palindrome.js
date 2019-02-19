
function checkIfPalindrome(answer){
  const reversed = answer.split("").reverse().join('');
  if(answer === reversed){
    console.log('Output: YES');
    console.log(`Reverse of ${answer} is also ${reversed}`)
    return;
  }
  console.log('Output: NO');
  console.log(`Reverse of ${reversed} is not ${answer}`);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input parameter: `, (answer) => {
  checkIfPalindrome(answer)
  readline.close()
})