// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array = [2, 3, 4, 5];
// It should return undefined

// NAIVE APPROACH
const firstRecurringChapter = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return console.log(input[i]);
      }
    }
  }
  return console.log(undefined);
}                     // BIG O(n^2) - Time Complexity || O(1) - Space Complexity

// BETTER APPROACH
const firstRecurringChapter2 = (input) => {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    console.log(map[input[i]]);
    if (map[input[i]] !== undefined) {
      return console.log(input[i]);
    } else {
      map[input[i]] = i;      // or replace i with true
    }
    console.log(map);
  }
  return console.log(undefined);
}                     // BIG O(n) - Time Complexity || O(n) - Space Complexity

firstRecurringChapter2([2, 1, 1, 2, 3, 5, 1, 2, 4]);