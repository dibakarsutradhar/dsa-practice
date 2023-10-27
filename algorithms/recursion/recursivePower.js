const assert = require('assert');

var power = function (x, n) {
	// base case
	// The base case is when n = 0, and x0 = 1.
	if (n === 0) {
		return 1;
	} else if (n < 0) {
		// recursive case: n is negative
		// If n is negative, recursively compute x-n, so that the exponent becomes positive. Then, xn = 1/x-n.
		return 1 / power(x, -n);
	} else if (n % 2 !== 0) {
		// recursive case: n is odd
		// If n is positive and odd, recursively compute xn-1, so that the exponent either is 0 or is positive and even. Then, xn = xn-1 ⋅ x
		return x * power(x, n - 1);
	} else {
		// recursive case: n is even
		// If n is positive and even, recursively compute y = xn/2, and then xn = y ⋅ y.
		// Notice that you can get away with making just one recursive call in this case, computing xn/2 just once, and then you multiply the result of this recursive call by itself.
		var y = power(x, n / 2);
		return y * y;
	}
};

assert.equal(power(2, 0), 1, 'TEST 1 FAILED');
assert.equal(power(3, 2), 9, 'TEST 2 FAILED');
assert.equal(power(5, 3), 125, 'TEST 3 FAILED');
assert.equal(power(2, -2), 0.25, 'TEST 4 FAILED');
assert.equal(power(5, -3), 0.008, 'TEST 5 FAILED');
