const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// push - add item at the end of the array
strings.push('e');  // O(1)

// pop  - remove the last item from the array
strings.pop();      // O(1)

// unshift  - add item at the beginning of an array
strings.unshift('x');   // O(n)

// splice - add item in the middle of the array
strings.splice(2, 0, 'y');  // O(n)

console.log(strings);