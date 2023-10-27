const assert = require('assert');

var isPalindrome = function (str) {
	// base case #1
	if (str.length === 0 || str.length === 1) {
		return true;
	}

	// base case #2
	if (str[0] !== str[str.length - 1]) {
		return false;
	}

	// recursive case
	return isPalindrome(str.substring(1, str.length - 1));
};

assert.equal(isPalindrome('motor'), false, 'TEST 1 FAILED');
assert.equal(isPalindrome('rotor'), true, 'TEST 2 FAILED');
assert.equal(isPalindrome('racecar'), true, 'TEST 3 FAILED');
assert.equal(isPalindrome('foobar'), false, 'TEST 4 FAILED');
