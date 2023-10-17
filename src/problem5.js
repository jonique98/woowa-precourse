

function problem5(money) {

	const answer = calculateChange(money);

	return answer;
}

function calculateChange(money) {

	const changeMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
	let currentMoney = money;
	let change = [];

	for(let i = 0; i < changeMoney.length; i++) {
		change.push(Math.floor((currentMoney / changeMoney[i])));
		currentMoney -= changeMoney[i] * change[i];
	}

	return change;
	
}

module.exports = problem5;
