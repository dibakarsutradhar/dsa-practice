// 1 --> 10 --> 99 --> 5 --> 16 --> ... ---> 99

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return console.log(this);
  }   // O(1)

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }   // O(1)

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }   // O(n)

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const pointer = leader.next;
    leader.next = newNode;
    newNode.next = pointer;
    this.length++;
    // return this.printList();
  }   // O(n)

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    // return this.printList();
  }   // O(n)

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    };
    return console.log(array);
  }   // O(n)

  reverse() {
    if (!this.head.next) {
      return console.log(this.head);
    }
    let first = this.head;
    this.tail = this.head; 
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();
