function isEqual(answer){
	answer = answer.split(' ')
	first = +answer[0];
	second = +answer[1];
		
	for(let key in first){
		if(typeof first[key] === 'object'){
			let firstInnerObj = first[key];
			let secondInnerObj = second[key];
			for(let index in firstInnerObj){
				if(firstInnerObj[index] !== secondInnerObj[index]) return `Output: No`;
			}
			for(let index in secondInnerObj){
				if(firstInnerObj[index] !== secondInnerObj[index]) return `Output: No`;
			}
		} else {
			if(first[key] !== second[key]) return `Output: No`;
		}
	}
	for(let key in second){
		if(typeof second[key] === 'object'){
			let firstInnerObj = first[key];
			let secondInnerObj = second[key];
			for(let index in firstInnerObj){
				if(firstInnerObj[index] !== secondInnerObj[index]) return `Output: No`;
			}
			for(let index in secondInnerObj){
				if(firstInnerObj[index] !== secondInnerObj[index]) return `Output: No`;
			}
		} else {
			if(first[key] !== second[key]) return `Output: No`;
		}
	}
	return `Output: YES`;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Input parameters: `, (answer) => {
  console.log(isEqual(answer));
  readline.close()
})
