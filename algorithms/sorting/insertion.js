const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move the number to first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < length; j++) {
        if (array[i] > array[j-1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);