const assert = require('assert');

var indexOfMinimum = function (array, startIndex) {
	// Set initial values for minValue and minIndex,
	// based on the leftmost entry in the subarray:
	var minValue = array[startIndex];
	var minIndex = startIndex;

	// Loop over items starting with startIndex,
	// updating minValue and minIndex as needed:
	for (var i = minIndex + 1; i < array.length; i++) {
		if (array[i] < minValue) {
			minIndex = i;
			minValue = array[i];
		}
	}

	return minIndex;
};

module.exports = indexOfMinimum;

// indexOfMinimum( [18,6,66,44,9,22,14,5] ,2)
// indexOfMinimum( [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,13,59,61,67,71,73,79,83,89,97] ,5)
var arr1 = [18, 6, 66, 44, 9, 22, 14, 5];
var arr2 = [
	2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 13, 59, 61, 67, 71,
	73, 79, 83, 89, 97,
];

try {
	assert.equal(indexOfMinimum(arr1, 2), 7);
	assert.equal(indexOfMinimum(arr2, 5), 5);
} catch (e) {
	console.error(e);
}
