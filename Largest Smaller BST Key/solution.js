// Solution is implemented starting line 16

// PART 1: Traversing the Tree
// Properties of a BST:
// 1) A node in a BST is LARGER than all keys in its LEFT subtree
// 2) A node in a BST is SMALLER than all keys in its RIGHT subtree
// We will keep these properties in mind as we traverse the tree starting from root to find our answer
// We use the variable 'candidate' initialized as -1, to keep track of possible answers
// A valid candidate is one who's value is strictly less than the number we are looking for
// Our final answer will be the LARGEST value in our BST that is SMALLER than the given number

// PART 2: Finding the Best Candidate (node)
// While root !== null, for each node we choose to traverse to its left or right child depending on the comparison between the given num and current node's value
// If current node's value is LESS than num, this node is a candidate and we continue traversing RIGHT to find a better candidate
// If current node's value is LARGER than num, we do NOT reassign candidate as this is not a possible answer, and traverse LEFT to find a smaller node
// Our exit condition for this while loop traversal is when we have reached pass our leaf nodes (root === null)
// At this point, we would've considered all possible candidates and will be left with the largest key smaller than the given num.

// Time & Space Analysis:
// TIME COMPLEXITY: O(logN) assuming tree is balanced. Worst case the tree is completely one-sided (like a LinkedList), and we would traverse EVERY node - O(N)
// SPACE COMPLEXIRTY: O(1) we are using a constant amount of space, candidate and root.

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function (num) {
  // your code goes here
  let candidate = -1;

  while (this.root !== null) {
    if (this.root.key > num) {          // too big! go left to find a smaller node
      this.root = this.root.left;
    } else {                // (this.root.key < num) this node is a possible answer, let's go right to see if we can find a larger node
      candidate = this.root;
      this.root = this.root.right;
    }
  }
  return candidate.key;
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function (key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};


// Test
// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(17);

console.log('Largest smaller number is ' + result);
