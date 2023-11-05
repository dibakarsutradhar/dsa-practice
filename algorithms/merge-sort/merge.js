const assert = require('assert');

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function (array, p, q, r) {
	var lowHalf = [];
	var highHalf = [];

	var k = p;
	var i;
	var j;
	for (i = 0; k <= q; i++, k++) {
		lowHalf[i] = array[k];
	}
	for (j = 0; k <= r; j++, k++) {
		highHalf[j] = array[k];
	}

	k = p;
	i = 0;
	j = 0;

	// Repeatedly compare the lowest untaken element in
	//  lowHalf with the lowest untaken element in highHalf
	//  and copy the lower of the two back into array
	while (i < lowHalf.length && j < highHalf.length) {
		if (lowHalf[i] <= highHalf[j]) {
			array[k] = lowHalf[i];
			i++;
		} else {
			array[k] = highHalf[j];
			j++;
		}
		k++;
	}

	// Once one of lowHalf and highHalf has been fully copied
	//  back into array, copy the remaining elements from the
	//  other temporary array back into the array
	while (i < lowHalf.length) {
		array[k] = lowHalf[i];
		i++;
		k++;
	}

	while (j < highHalf.length) {
		array[k] = highHalf[j];
		j++;
		k++;
	}

	return array;
};

module.exports = merge;

assert.deepStrictEqual(merge([2, 4, 1, 3], 0, 1, 3), [1, 2, 3, 4]);
assert.deepStrictEqual(
	merge([-99, 1, 2, 3, -1, 0, 4], 0, 3, 6),
	[-99, -1, 0, 1, 2, 3, 4]
);
assert.deepStrictEqual(merge([1, 2, 3, 4], 0, 1, 3), [1, 2, 3, 4]);
assert.deepStrictEqual(merge([2], 0, 0, 0), [2]);
