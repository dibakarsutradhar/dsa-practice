const assert = require('assert');

const indexOfMinimum = require('./indexOfMinimum');
const swap = require('./swap');

var selectionSort = function (array) {
	// Write this method
	for (var i = 0; i < array.length; i++) {
		var minIndex = indexOfMinimum(array, i);
		swap(array, i, minIndex);
	}

	return array;
};

assert.deepStrictEqual(
	selectionSort([4, 2, 1, 3]),
	[1, 2, 3, 4],
	'TEST1 FAILED'
);
assert.deepStrictEqual(
	selectionSort([4, 3, 2, 1, 0, -1, -99]),
	[-99, -1, 0, 1, 2, 3, 4],
	'TEST2 FAILED'
);
assert.deepStrictEqual(
	selectionSort([1, 2, 3, 4]),
	[1, 2, 3, 4],
	'TEST3 FAILED'
);
assert.deepStrictEqual(selectionSort([2]), [2], 'TEST4 FAILED');
assert.deepStrictEqual(selectionSort([]), [], 'TEST5 FAILED');
