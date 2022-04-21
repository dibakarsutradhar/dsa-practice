// Given a number N, return the index value of Fibonacci sequence, Where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
// The pattern of the sequence is that each value is the sum of the previous two values,
// that means that for N=5 -> 2+3

let calculations = 0;

const fibMaster = () => {         // O(n)
  let cache = {};
  return fib = (n) => {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

const fibSeq = fibMaster();

console.log('1', fibSeq(10));
console.log('Calculations: ', calculations);