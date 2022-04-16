let counter = 0;

const inception = () => {
  console.log(counter);
  if (counter > 3) {                  // Base Case
    return console.log('Done');
  }
  counter++;
  return inception();                 // Recursive Case
}

inception();


// 3 Rules of Recursion
// -------------------------------
// 1. Identify the Base Case
// 2. Identify the Recursive Case
// 3. Get closer and closer, and Return when Needed. Usually two returns, one for base case and second for recursive case