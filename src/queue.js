const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null; // Points to the head of the queue
        this.tail = null; // Points to the tail of the queue
    }

    // Adds a value to the end of the queue
    enqueue(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            // If the queue is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the queue is not empty, append the new node to the tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Retrieves and removes a value from the head of the queue
    dequeue() {
        if (!this.head) {
            // If the queue is empty, return null
            return null;
        }
        const dequeuedValue = this.head.value; // Get the value of the head node
        this.head = this.head.next; // Move the head to the next node
        if (!this.head) {
            // If the queue becomes empty after dequeuing, set the tail to null as well
            this.tail = null;
        }
        return dequeuedValue;
    }

    // Returns the underlying linked list
    getUnderlyingList() {
        return this.head;
    }
}

module.exports = {
    Queue,
};
