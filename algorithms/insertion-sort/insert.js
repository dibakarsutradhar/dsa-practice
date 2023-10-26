const assert = require('assert');

// var insert = function (array, rightIndex, value) {
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] == value) {
// 			array.splice(i, 1);
// 		}
// 	}

// 	for (let i = 0; i < rightIndex; i++) {
// 		if (value < array[i]) {
// 			array.splice(i, 0, value);
// 			break;
// 		}
// 	}

// 	return array;
// };

// array = [1, 2, 3, 4, 5, 7, 6, 9]
// rightIndex = 5
// value = 6

// i == 5, i > 0 && array[5] > 6; 5-1 = 4
// i == 4, i > 0 && array[4] > 6; 5-1 = 4	INVALID as array[4] == 5 !> 6
// array[i + 1] === array[4 + 1] === array[5] = array[i]

var insert = function (array, rightIndex, value) {
	for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
		array[i + 1] = array[i];
	}
	array[i + 1] = value;

	return array;
};

module.exports = insert;

assert.deepStrictEqual(
	insert([3, 5, 7, 11, 13, 2, 9, 6], 4, 2),
	[2, 3, 5, 7, 11, 13, 9, 6],
	'FAILED TEST 1'
);

assert.deepStrictEqual(
	insert([2, 3, 5, 7, 11, 13, 9, 6], 5, 9),
	[2, 3, 5, 7, 9, 11, 13, 6],
	'FAILED TEST 2'
);

assert.deepStrictEqual(
	insert([2, 3, 5, 7, 9, 11, 13, 6], 6, 6),
	[2, 3, 5, 6, 7, 9, 11, 13],
	'FAILED TEST 3'
);
