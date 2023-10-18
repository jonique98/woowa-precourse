
function problem1(pobi, crong) {
	const RESULT = {
		pobiWin: 1,
		crongWin: 2,
		draw: 0,
		exception: -1,
	};

	if (wrongNumber(pobi) || wrongNumber(crong))
		return RESULT.exception;

	const pobiMaxValue = getMaxvalue(pobi);

	const crongMaxValue = getMaxvalue(crong);

  if (pobiMaxValue > crongMaxValue)
		return RESULT.pobiWin;

	if (crongMaxValue > pobiMaxValue)
		return RESULT.crongWin;

	if (pobiMaxValue === crongMaxValue)
		return RESULT.draw;
}

function wrongNumber(page) {
	if (page[1] - page[0] > 1)
		return true;
	return false;
}

function eachPageMaxValue(page) {
	let pageNumberToString = page.toString().split("");
	let multiple = multipleValue(pageNumberToString);
	let add = addValue(pageNumberToString);

	return Math.max(multiple, add);
}

function multipleValue(page) {
	 let multiple = page.reduce((accumulator, current) => {
		return Number(accumulator) * Number(current);
	});
	return multiple;
}

function addValue(page) {
	let add = page.reduce((accumulator, current) => {
		return Number(accumulator) + Number(current);
	});
	return add;
}

function getMaxvalue(page) {
	return Math.max(
		...page.map((eachPage) => eachPageMaxValue(eachPage))
	);
}

module.exports = problem1;