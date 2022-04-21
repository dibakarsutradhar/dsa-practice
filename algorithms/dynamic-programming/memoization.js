let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('Long Time');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(6));
console.log('3', memoizedAddTo80(6));