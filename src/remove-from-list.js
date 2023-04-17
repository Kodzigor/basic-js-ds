const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const dummy = new ListNode(null);
    dummy.next = l;
    let prev = dummy; // Pointer to keep track of the previous node
    let curr = l; // Pointer to traverse the linked list

    while (curr !== null) {
        if (curr.value === k) {
            // If the current node has a value equal to k, skip it by updating the next pointer of the previous node
            prev.next = curr.next;
        } else {
            // If the current node does not have a value equal to k, move the prev pointer to the current node
            prev = curr;
        }
        curr = curr.next; // Move the current pointer to the next node
    }

    return dummy.next; // Return the head of the updated linked list
}

class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

module.exports = {
    removeKFromList,
};
