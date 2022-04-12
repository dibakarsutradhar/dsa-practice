class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return console.log(this);
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return console.log(this);
          }
          currentNode = currentNode.right;
        }
      }
    }
    console.log(this);
  }

  lookup(value) {

  }

  // remove
}



const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);