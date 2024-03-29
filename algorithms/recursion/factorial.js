const assert = require('assert');

var factorial = function (n) {
	var result = 1;

	for (var i = 2; i <= n; i++) {
		result = result * i;
	}

	return result;
};

var fact1 = function (n) {
	var result = n * n;
	fact1(n - 1);
}

module.exports = factorial;

assert.equal(factorial(0), 1, 'TEST 1 FAILED');
assert.equal(factorial(1), 1, 'TEST 2 FAILED');
assert.equal(factorial(2), 2, 'TEST 3 FAILED');
assert.equal(factorial(5), 120, 'TEST 4 FAILED');
