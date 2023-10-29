#include <stdio.h>

void fnB(int n);

void fnA(int n) {
	if (n > 0) {
		printf("%d ", n);
		fnB(n - 1);
	}
}

void fnB(int n) {
	if (n > 1) {
		printf("%d ", n);
		fnA(n / 2);
	}
}

int main() {
	fnA(20);
}