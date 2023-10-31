#include <stdio.h>

// using recurstion
int fact(int n) {
	if (n < 0) {		// stack overflow check
		return 0;
	}
	if (n==0) {
		return 1;
	}
	return fact(n-1)*n;
}

// using iterative loop
int Ifact(int n) {
	int f = 1;
	int i;
	for(i = 1; i <= n; i++) {
		f = f*i;
	}
	return f;
}

int main() {
	int r;
	r = Ifact(5);
	printf("%d ", r);
	return 0;
}