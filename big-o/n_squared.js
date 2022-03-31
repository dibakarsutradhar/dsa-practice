// Log all pairs of Array
const boxes = ['a', 'b', 'c', 'd', 'e'];

const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

// logAllPairsOfArray(boxes);


// BIG O
// O(n * n)   --> When loops are nested, instead of addition, they become multiplication
// O(n^2)     --> Quadratic Time  --> Everytime the number of elements increases,
//                the number of operations increases Quadratically.

// makes it Horrible Big O


const printAllNumbersThenAllPairSums = (numbers) => {
  
  console.log('These are the numbers: ');
  numbers.forEach(function(number) {                // O(n)
    console.log(number);
  });

  console.log('and these are their sums: ');
  numbers.forEach(function(firstNumber) {           // O(n^2)
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// BIG O
// O(n + n^2)
// According to RULE 4: Drop the non-dominents.
// Here the first (n) is non-dominent, so
// O(n^2)