#include <stdio.h>

// Using direct formula		||	Time - O(1)		||	Space - O(1)
int fnD(int n) {
	return n * (n + 1) / 2;
}

// Using For Loop					||	Time - O(n)		||	Space - O(1)
int fnL(int n) {
	int i, s = 0;
	for (i = 1; i <= n; i++) {
		s = s + i;
	}
	return s;
}

// Using Recursion				||	Time - O(n)		||	Space - O(n)
int fnR(int n) {
	if (n == 0) {
		return 0;
	}
	return fnR(n-1) + n;
}

int main() {
	int d, l, r = 0;
	d = fnD(5);
	l = fnL(5);
	r = fnR(5);
	printf("%d\n", d);
	printf("%d\n", l);
	printf("%d\n", r);
	return 0;
}