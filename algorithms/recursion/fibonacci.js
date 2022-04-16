// Given a number N, return the index value of Fibonacci sequence, Where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// The pattern of the sequence is that each value is the sum of the previous two values,
// that means that for N=5 -> 2+3

function fibonacciIterative(n) {                        // Big O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return console.log(arr[n]);
}

fibonacciIterative(8);

function fibonacciRecursive(n) {                        // Big O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// fibonacciRecursive(3);