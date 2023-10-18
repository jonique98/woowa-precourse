function problem7(user, friends, visitors) {

	let RESULT ;
	let friendsList = makeFriendsList(user, friends, visitors);
	let friendsMap = makeFriendsMap(friendsList);


	rankingSystem(friendsMap, friendsList, friends, visitors);
	RESULT = sortMap(friendsMap);
	let answer = [];

	for(let i = 0; i < RESULT.length; i++) {
		answer.push(RESULT[i][0]);
	}
	return answer;
}

function listReturn(friendsMap) {
	let cnt = 0;
	let result = [];

	friendsMap.forEach((friend, score) => {
		if(score != 0) {
			result.push(friend);
			cnt++;
		}
		if (cnt >= 4)
			return ;
	});
	return result;
}

function sortMap(friendsMap) {
  const mapToArray = Array.from(friendsMap);

  mapToArray.sort((a, b) => {

    const comparison = b[1] - a[1];

    if (comparison === 0) {
      return a[0].localeCompare(b[0]);
    }

    return comparison;
  });

  return mapToArray;
}

function makeFriendsList(user, friends, visitors) {
	let list = new Set();
	let	alreadyFriend = new Set();

	alreadyFriendList(user, friends, alreadyFriend);

	friends.forEach((friend) => {
		if(!alreadyFriend.has(friend[0]))
			list.add(friend[0]);
		if(!alreadyFriend.has(friend[1]))
			list.add(friend[1]);
	})

	visitors.forEach((visitor) => {
		if (!alreadyFriend.has(visitor))
			list.add(visitor);
	})

	list.delete(user);
	return list;
}

function alreadyFriendList(user, friends, alreadyFriend) {
	
	friends.forEach((friend) => {

		if (friend[0] === user) {
			alreadyFriend.add(friend[1]);
		return ;
	}

	if (friend[1] === user) {
		alreadyFriend.add(friend[0]);
		return ;
	}

	})
};

function makeFriendsMap(friendsList) {
	let friendsMap = new Map();

	friendsList.forEach((friend) => {
		friendsMap.set(friend, 0);
	})
	return friendsMap;
}

function rankingSystem(friendsMap, friendsList, friends, visitors) {
	friendsList.forEach((friend) => {
		rankHowManyfriends(friend, friendsMap, friends);
		rankHowManyVisit(friend, friendsMap, visitors);
	})
}

function rankHowManyfriends(friend, friendsMap, friends) {
	friends.map((friendSet) => {
		if (friend === friendSet[0] || friend === friendSet[1])
			friendsMap.set(friend, friendsMap.get(friend) + 10);
	});
}

function rankHowManyVisit(friend, friendsMap, visitors) {
	visitors.map((visitor) => {
		if (friend === visitor)
			friendsMap.set(friend, friendsMap.get(friend) + 1);
	});
}

module.exports = problem7;