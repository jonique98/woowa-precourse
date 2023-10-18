
function problem4(word) {
	const answer = frogConverseWord(word);

	return answer;
}

function frogConverseWord(word) {

	let frogWord = "";
	for(let i = 0; i < word.length; i++) {
		frogWord += returnFrogAlphabet(word[i]);
	}
	return frogWord;
}

function returnFrogAlphabet(wordAlphabet) {
	const ASCII = {
		upperCaseStart: 65,
		upperCaseEnd: 90,
		lowerCaseStart: 97,
		lowerCaseEnd: 122,
	  };

	let alphabetAscii = wordAlphabet.charCodeAt(0);

	const upperCaseReverse = ASCII.upperCaseStart + ASCII.upperCaseEnd - alphabetAscii;
	const lowerCaseReverse = ASCII.lowerCaseStart + ASCII.lowerCaseEnd - alphabetAscii;

	if (ASCII.upperCaseStart <= alphabetAscii && alphabetAscii <= ASCII.upperCaseEnd)
	  return String.fromCharCode(upperCaseReverse);
	
	if (ASCII.lowerCaseStart <= alphabetAscii && alphabetAscii <= ASCII.lowerCaseEnd)
	  return String.fromCharCode(lowerCaseReverse);

	return String.fromCharCode(alphabetAscii);
}

module.exports = problem4;