// Define an array of numbers (use any random numbers). 
// Write a program in Javascript to print only the even 
// numbers of the array. Do not use any library functions, 
// need to do via for loops only

const evenNumbers = (arr) => {
	let  result = []
	for(let i of arr) {
			if(i%2 === 0) {
				result.push(i)
			}
		}
	return result
}

evenNumbers([1,4,6,3,9,34,77])