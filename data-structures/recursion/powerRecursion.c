#include <stdio.h>

int pow1(int m, int n) {
	if (n == 0) {
		return 1;
	}
	return pow1(m, n-1) * m;
}

// Does less amount of multiplications
int pow2(int m, int n) {
	if (n == 0) {
		return 1;
	}

	if (n % 2 == 0) {
		return pow2(m * m, n / 2 );
	} else {
		return m * pow2(m * m, (n - 1) / 2);
	}
}

// Time -> O(n + 1)
// Space -> O(n)

int main() {
	int r = pow2(9, 3);
	printf("%d ", r);
	return 0;
}