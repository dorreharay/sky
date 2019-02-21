function compareBrackets(str) {
  let a = str, b;
  while (a != b) (
    b = a, 
    a = a.replace(/\(\)/g, '')
  )
  return `Output: ${!a ? 'YES' : 'NO'}`
}
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input parameters: `, (answer) => {
  console.log(compareBrackets(answer))
  readline.close()
})
