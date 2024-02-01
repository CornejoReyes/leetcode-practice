class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const root = new TreeNode(3);
const nine = new TreeNode(9);
const twenty = new TreeNode(20);
const fifteen = new TreeNode(15);
const seven = new TreeNode(7);
const four = new TreeNode(4);
const three = new TreeNode(3);
const six = new TreeNode(6);
const one = new TreeNode(1);
root.left = nine;
root.right = twenty;
twenty.left = fifteen;
twenty.right = seven;
fifteen.left = four;
four.left = three;
three.right = six;
six.right = one;

console.log(maxDepth(root));