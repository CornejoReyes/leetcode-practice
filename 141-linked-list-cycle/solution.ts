class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  const visited: WeakMap<object, boolean> = new WeakMap();
  let currentNode = head;
  while (currentNode?.next) {
    if (visited.has(currentNode)) {
      return true;
    }
    visited.set(currentNode, true);
    currentNode = currentNode.next;
  }
  return false;
}

const head = new ListNode(3);
const two = new ListNode(2);
const zero = new ListNode(0);
const mFour = new ListNode(-4);
head.next = two;
two.next = zero;
zero.next = mFour;
mFour.next = two;

console.log(hasCycle(head));