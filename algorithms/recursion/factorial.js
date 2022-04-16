// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use for a loop.

const findFactorialRecursive = (number) => {
  if (number <= 2) {
    return number;
  }
  return number * findFactorialRecursive(number-1);
}

findFactorialRecursive(5);

const findFactorialIterative = (number) => {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  } else {
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    };
  }
  return console.log(answer);
}

// findFactorialIterative(5);