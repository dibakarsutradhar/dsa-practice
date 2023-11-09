#include <stdio.h>
#include <stdlib.h>

int main() {
	int A[3][4] = {{1,2,3,4}, {2,4,6,8}, {1,3,5,7}};	// method 1 --> creates in stack

	int *B[3];	// method 2	-> row -> created in stack
	B[0] = (int *)malloc(4 * sizeof(int));		// column -> created in heap
	B[1] = (int *)malloc(4 * sizeof(int));		// column -> created in heap
	B[2] = (int *)malloc(4 * sizeof(int));		// column -> created in heap

	int **C;		// method 3	
	C = (int **)malloc(3 * sizeof(int *));		// row -> created in heap
	C[0] = (int *)malloc(4 * sizeof(int));		// column -> created in heap
	C[1] = (int *)malloc(4 * sizeof(int));		// column -> created in heap
	C[2] = (int *)malloc(4 * sizeof(int));		// column -> created in heap

	// printing the arrays
	int i, j;
	for (i=0; i<3; i++) {
		for (j=0; j<4; j++) {
			printf("%d ", C[i][j]);
		}
		printf("\n");
	}

	return 0;
}