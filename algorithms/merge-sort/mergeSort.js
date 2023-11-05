// Takes in an array that has two sorted subarrays,

const assert = require('assert');
const merge = require('./merge');

// Takes in an array and recursively merge sorts it
var mergeSort = function (array, p, r) {
	// Write this method
	if (p < r) {
		var q = Math.floor((p + r) / 2);
		mergeSort(array, p, q);
		mergeSort(array, q + 1, r);
		var arr = merge(array, p, q, r);
		return arr;
	}
};

assert.deepStrictEqual(mergeSort([4, 2, 1, 3]), [1, 2, 3, 4], 'TASK 1 FAILED!');
assert.deepStrictEqual(
	mergeSort([4, 3, 2, 1, 0, -1, -99]),
	[-99, -1, 0, 1, 2, 3, 4],
	'TASK 2 FAILED!'
);
assert.deepStrictEqual(mergeSort([1, 2, 3, 4]), [1, 2, 3, 4], 'TASK 3 FAILED');
assert.deepStrictEqual(mergeSort([2]), 2, 'TASK 4 FAILED !');
assert.deepStrictEqual(mergeSort([]));
