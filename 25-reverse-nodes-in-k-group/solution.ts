/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) {
    return head;
  }
  let count = 1;
  let last = head;
  while (count < k && last.next) {
    last = last.next;
    count += 1;
  }
  if (count < k) {
    return head;
  }
  const stack: (ListNode | null)[] = [];
  let currentNode: ListNode | null = head;
  while (count >= 1) {
    stack.push(currentNode);
    currentNode = currentNode ? currentNode.next : null;
    count -= 1;
  }
  head.next = reverseKGroup(last.next, k);
  let current = stack.pop();
  while (stack.length) {
    if (current) {
      current.next = stack.pop() || null;
      current = current.next;
    }
  }
  head = last;
  return head;
}

let head = createLinkedList(9);

printList(head);
printList(reverseKGroup(head, 5));

function printList(head: ListNode | null) {
  console.log("Printing list...");
  let curr: any = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

function createLinkedList(len: number) {
  let current: ListNode | null = null;
  for (let i = 0; i < len; i++) {
    let newNode = new ListNode(len - i, current);
    current = newNode;
  }
  return current;
}
