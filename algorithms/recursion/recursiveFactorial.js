const assert = require('assert');

var factorial = function (n) {
	// Base Case
	if (n === 0) {
		return 1;
	}

	// recursive case
	return n * factorial(n - 1);
};

module.exports = factorial;

assert.equal(factorial(0), 1, 'TEST 1 FAILED');
assert.equal(factorial(1), 1, 'TEST 2 FAILED');
assert.equal(factorial(2), 2, 'TEST 3 FAILED');
assert.equal(factorial(5), 120, 'TEST 4 FAILED');
