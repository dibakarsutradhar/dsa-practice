// Log all pairs of Array
const boxes = ['a', 'b', 'c', 'd', 'e'];

const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

logAllPairsOfArray(boxes);


// BIG O
// O(n * n)   --> When loops are nested, instead of addition, they become multiplication
// O(n^2)     --> Quadratic Time  --> Everytime the number of elements increases,
//                the number of operations increases Quadratically.

// makes it Horrible Big O