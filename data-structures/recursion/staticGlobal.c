#include <stdio.h>

int fn(int n) {
	static int x = 0;
	if (n > 0) {
		x++;
		return fn(n - 1)+x;
	}
	return 0;
}


int main() {
	int r;
	r = fn(5);
	printf("%d", r);
	return 0;
}