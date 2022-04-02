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

// Brute force solution

// const containsCommonItems = (arr1, arr2) => {
//   for(let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// easy naive/brute force solution is - nested loops or Big O(n^2)  - not the best solution

// ----------------------------------------------------------------------------------------

// BETTER SOLUTION

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'q'];

// array1 = obj {
//   a: true;
//   b: true;
//   c: true;
//   x: true
// }
// array2[index] === obj.properties

const containsCommonItems2 = (arr1, arr2) => {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  
  // loop through second array and check if items in second array on created obj
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return console.log(true);
    }
  }
  return console.log(false);
}

containsCommonItems2(array1, array2);

// BIG o(n)