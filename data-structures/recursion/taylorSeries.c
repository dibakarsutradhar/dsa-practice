// Taylor Series
#include <stdio.h>

// e^x = 1 + x/1 + x^2 / 2! + x^3 / 3! + x^4 / 4! + ...... + x^(n-1) / (n-1)! + x^n / n!

// Static Variables -> p=1, f=1			// p for power | f for factorial
// 						e(x, 4) = 1 + x/1 + x^2/2! + x^3/3! + x^4/4!
// 							/
// 					e(x, 3) = 1 + x/1 + x^2/2! + x^3/3! + x^4/4!		|| where p = (x * x * x * x) == x^4 && f = (1 * 2 * 3 * 4) == 4!
// 						/
// 				e(x, 2) = 1 + x/1 + x^2/2! + x^3/3!								|| where p = (x * x * x) == x^3 && f = (1 * 2 * 3) == 3!
//					/
// 			e(x, 1) = 1 + x/1 + x^2/2!													|| where p = (x * x) == x^2 && f = (1 * 2) == 2!
//				/
// 		e(x, 0) = 1 + x/1							 												|| where p = 1 * x == x && f = 1 * 1 == 1
// 			/		
// 			1																										|| where p=1, f=1

// Total Multiplication require is n(n+1) -> O(n^2)	| Quadratic
// Time -> O(n^2)
double taylor(int x, int n) {
	static double p = 1, f = 1;
	double  r;

	if (n == 0) {
		return 1;
	} else {
		r = taylor(x, n - 1);
		p = p * x;
		f = f * n;
		return r + p / f;
	}
}

// Alternative Approach for better time complexity
// e^x = 1 + x/1 + x^2 / 2! + x^3 / 3! + x^4 / 4! + ...... + x^(n-1) / (n-1)! + x^n / n!
// = 1 + x/1 + x^2/1*2 + x^3/1*2*3 + x^4/1*2*3*4
// = 1 + x/1 [1 + x/2 + x^2/2*3 + x^3/2*3*4]
// = 1 + x/1 [1 + x/2 [1 + x/3 + x^2/3*4]]
// = 1 + x/1 [1 + x/2 [1 + x/3 [1 + x/4]]]			-> total mul = 4 or n times -> O(n)	| Linear

double taylorLoop(int x, int n) {
	double s = 1, num = 1, den = 1;
	int i;
	for (i=1; i<=n; i++) {
		num *= x;
		den *= i;
		s += num/den;
	}
	return s;
}

double taylorR(int x, int n) {
	static double s;
	if (n == 0) {
		return s;
	} else {
		s = 1 + x * s / n;
		return taylorR(x, n - 1);
	}
}

int main() {
	printf("%lf \n", taylor(2, 10));
	printf("%lf \n", taylorLoop(2, 10));
	printf("%lf \n", taylorR(2, 10));
	return 0;
}