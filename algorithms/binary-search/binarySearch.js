/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue) {
	var min = 0;
	var max = array.length - 1;
	while (min <= max) {
		var guess = Math.floor((max + min) / 2);

		if (array[guess] === targetValue) {
			return guess;
		} else if (array[guess] < targetValue) {
			min = guess + 1;
		} else {
			max = guess + 1;
		}
	}
	return -1;
};

//Result	Input	Expected Output	Actual Output	Reason
// doSearch( [2,3,5,7,11,13,17,19,23,29,31,20	20	Succeeded
//doSearch( [22,44,66,88] ,88)	3	3	Succeeded
//doSearch( [99,100] ,101)	-1	-1	Succeeded

const bs = doSearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 20], 20);

console.log(bs);
