
function fibonacciRecursion(x){
  if (x == 0) return [];
  if (x == 1) return [1];
  if (x == 2) return [1, 1];
  else {
    let arr = fibonacciRecursion(x - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
};
 
function fibonacciLoop(value){
  let arr = [1, 1];
  if (value == 0) return "can not make a recursion"
  if (value == 1) arr = [1]
  for(let i = 0; i < value - 2; i++){
    arr[i+2] = arr[i] + arr[i+1];
  }
  return arr;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input parameter: `, (answer) => {
  console.log(`Output: ${fibonacciRecursion(answer).join()}`);
  readline.close()
})
