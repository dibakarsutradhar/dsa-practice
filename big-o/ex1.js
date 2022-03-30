const funChallenge = (input) => {
  let a = 10;  // O(1)
  a = 50 + 3;  // O(1)

  for (let i = 0; i < input.length; i++) {    // O(n)   --> n is the input
    anotherFunction();    // O(n)
    let stranger = true;  // O(n)
    a++                   // O(n)
  }
  return a;   // O(1)
}


// STEPS
// 3 O(1)
// 4 O(n)
// 3 + 4n
// BIG O(3 + 4n)
// or O(n)