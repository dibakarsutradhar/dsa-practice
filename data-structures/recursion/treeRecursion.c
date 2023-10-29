#include <stdio.h>

void fn (int n) {
	if (n > 0) {
		printf("%d ", n);

		fn(n-1);
		fn(n-1);
	}
}

int main() {
	fn(3);
}

// Time - 2^0 + 2^1 + 2^2 + 2^3 ... 2^n = 2^(n+1) - 1 === 2^n -> BigO(2^n)
// Space - (n + 1) Stack record -> BigO(n)