
function problem6(forms) {

	answer = duplicateEmail(forms);

	return answer.sort();
}

function duplicateEmail(forms) {

	let list = new Set();

	makeEmailList(list, forms);

	return Array.from(list);
}

function makeEmailList(list, forms) {

	let twoWords = "";
	forms.map((form) => {
		for(let i = 0; i < form[1].length - 1; i++) {
			twoWords = form[1].substring(i, i + 2);
			email = form[0];
			checkDuplicate(list, forms, twoWords, email);
		}
	})
}

function checkDuplicate(list, forms, twowords, email) {
	let cnt = 0;
	let compareTwoWords = "";

	forms.map((form) => {
		for(let j = 0; j < form[1].length - 1; j++) { 
			compareTwoWords = form[1].substring(j, j + 2);
			if (twowords === compareTwoWords) {
				cnt++;
			}
			if (cnt > 1) {
				list.add(email);
				return ;
			}
		}
	});
}

module.exports = problem6;