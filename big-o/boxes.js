const boxes = [0,1,2,3,4,5,6];

const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]);  // O(1)
  console.log(boxes[1]);  // O(1)
};

logFirstTwoBoxes(boxes);  // O(2) --> O(log n), O(1) --> Constant Time