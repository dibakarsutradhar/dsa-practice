const assert = require('assert');

var solveHanoi = function (n, source, dest, spare) {
	if (n == 0) {
		return 0;
	} else {
		solveHanoi(n - 1, source, spare, dest);
		console.log(`MOVE ${n} from ${source} to ${dest}`);
		solveHanoi(n - 1, spare, dest, source);
	}
};

solveHanoi(5, 'source A', 'destination B', 'Spare C');
