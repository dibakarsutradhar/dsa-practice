const assert = require('assert');
const insert = require('./insert');

var insertionSort = function (array) {
	for (var i = 1; i < array.length; i++) {
		insert(array, i - 1, array[i]);
	}

	return array;
};

assert.deepStrictEqual(
	insertionSort([4, 2, 1, 3]),
	[1, 2, 3, 4],
	'TEST 1 FAILED'
);

assert.deepStrictEqual(
	insertionSort([4, 3, 2, 1, 0, -1, -99]),
	[-99, -1, 0, 1, 2, 3, 4],
	'TEST 2 FAILED'
);

assert.deepStrictEqual(
	insertionSort([1, 2, 3, 4]),
	[1, 2, 3, 4],
	'TEST 3 FAILED'
);

assert.deepStrictEqual(insertionSort([2]), [2], 'TEST 4 FAILED');
assert.deepStrictEqual(insertionSort([]), [], 'TEST 5 FAILED');
