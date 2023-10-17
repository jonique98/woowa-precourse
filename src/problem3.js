
function problem3(number) {

	const answer = countThreeMultiple(number);
	return answer;
}

function countThreeMultiple(number) {

	let cnt = 0;
	let numberTostring = "";

	for(let i = 1; i <= number; i++) {
		numberTostring = i.toString().split("");
		cnt += threeMultipleCounter(numberTostring)
	}
	return cnt;
}

function threeMultipleCounter(currentNumber) {
	let cnt = 0;
  
	cnt = currentNumber.reduce((acc, cur) => {
	  if (cur === '3' || cur === '6' || cur === '9') {
		return acc + 1;
	  }
	  return acc;
	}, 0);
  
	return cnt;
  }

module.exports = problem3;