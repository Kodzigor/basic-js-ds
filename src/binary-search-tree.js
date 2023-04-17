const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree {
    constructor() {
        this.rootEl = null;
    }
    root() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        return this.rootEl;
    }

    add(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        const node = this.rootEl;

        if (node === null) {
            this.rootEl = new Node(data);
            return;
        } else {
            const binaryTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return binaryTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return binaryTree(node.right);
                    }
                } else {
                    return null;
                }
            };

            return binaryTree(node);
        }
    }

    has(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.rootEl;
        while (current) {
            if (data === current.data) {
                return true;
            }
            data < current.data ? (current = current.left) : (current = current.right);
        }
        return false;
    }

    find(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.rootEl;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    remove(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.rootEl;
    }

    min() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.rootEl;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    max() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.rootEl;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
}

module.exports = {
    BinarySearchTree,
};
