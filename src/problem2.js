
function problem2(cryptogram) {

	const answer = cryptogramDecipher(cryptogram);
	return answer
}

function cryptogramDecipher(cryptogram) {

	let newCryptogram = overlapRemoval(cryptogram);

	if (cryptogram === newCryptogram)
		return newCryptogram
	
	return cryptogramDecipher(newCryptogram);
}

function overlapRemoval(cryptogram) {

	let newCryptogram = ""
	let overlapAlphabet = ""
	
	for(let i = 0; i < cryptogram.length; i++) {
		if (cryptogram[i] === cryptogram[i + 1] || overlapAlphabet == cryptogram[i]) {
			overlapAlphabet = cryptogram[i];
			continue;
		}
		overlapAlphabet = ""
		newCryptogram += cryptogram[i];
	}
	
	return newCryptogram;

}

module.exports = problem2;