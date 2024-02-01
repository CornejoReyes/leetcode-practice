class BinarySearchTreeNode {
  public value: number;
  public left: BinarySearchTreeNode | null;
  public right: BinarySearchTreeNode | null;
  
  constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function insertNode(node: BinarySearchTreeNode, value: number): void {
  if (node.value === value) {
      return;
  }
  if (value < node.value) {
      if (node.left) {
          insertNode(node.left, value);
      } else {
          node.left = new BinarySearchTreeNode(value);
      }
  } else {
      if (node.right) {
          insertNode(node.right, value);
      } else {
          node.right = new BinarySearchTreeNode(value);
      }
  }
}

function insertNodes(root: BinarySearchTreeNode, values: number[]): BinarySearchTreeNode {
  for (const val of values) {
      insertNode(root, val);
  }
  return root;
}

function printBinarySearchTree(root: BinarySearchTreeNode, result?: number[]): string {
  // Print tree DFS
  if (!result) {
      result = [];
  }
  
  result.push(root.value);
  if (root.left) {
      printBinarySearchTree(root.left, result);
  }
  if (root.right) {
      printBinarySearchTree(root.right, result);
  }
  
  return result.join(' ');
}

const root = new BinarySearchTreeNode(23);
const insert = [16, 15, 9, 6, 17, 10, 13, 8, 26, 18, 2, 22, 24, 12, 5, 20, 25, 21, 4, 19, 1, 3, 14, 7, 11];
insertNodes(root, insert);
console.log(printBinarySearchTree(root) == '23 16 15 9 6 2 1 5 4 3 8 7 10 13 12 11 14 17 18 22 20 19 21 26 24 25');

const root2 = new BinarySearchTreeNode(5);
const insert2 = [];
insertNodes(root2, insert2);
console.log(printBinarySearchTree(root2) == '5');

const root3 = new BinarySearchTreeNode(9);
const insert3 = [3, 5, 1, 8, 12, 16, 11, 2, 4, 6];
insertNodes(root3, insert3);
console.log(printBinarySearchTree(root3) == '9 3 1 2 5 4 8 6 12 11 16');
