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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }
  let pivot: ListNode | null = head;
  let aux: ListNode | null = head;
  for (let i = 0; i < n; i += 1) {
    if (!aux) {
      break;
    }
    aux = aux.next;
  }
  if (aux === null) {
    return pivot.next;
  }
  if (pivot === aux) {
    return null;
  }
  while (aux.next) {
    pivot = pivot!.next;
    aux = aux.next;
  }
  aux = pivot;
  pivot!.next = aux!.next?.next || null;

  return head;
}

const one = new ListNode(1);
const two = new ListNode(2);
one.next = two;

console.log(removeNthFromEnd(one, 2));
