// Given two arrays, create a function that
// let's an user know (true/false) whether
// these two arrays contains any common items.

// For Example.
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// --------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.


// 2 parameters - arrays  - no size limit
// return true or false

// easy naive/brute force solution is - nested loops or Big O(n^2)  - not the best solution
// Brute force solution
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
const containsCommonItems = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

