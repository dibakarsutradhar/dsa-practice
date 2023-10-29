#include <stdio.h>

int fn(int n) {
	if (n > 100) {
		return n - 10;
	}
	return fn(fn(n + 11));
}

int main() {
	int r;
	r = fn(30);
	printf("%d\n", r);
	return 0;
}