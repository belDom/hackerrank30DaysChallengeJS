// Day 23: BST Level-Order Traversal

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function levelOrder
    this.levelOrder = function (root) {

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        function enqueueElement(elem) {
            queue.push(elem);
        }

        function dequeueElement() {
            return queue.shift();
        }

        let queue = [];

        enqueueElement(root);

        while (queue.length !== 0) {
            let tmpElem = dequeueElement();
            console.log(tmpElem); // Need to modify

            if (tmpElem.left) {
                enqueueElement(tmpElem.left);
            }

            if (tmpElem.right) {
                enqueueElement(tmpElem.right);
            }
        }

    }; // End of function levelOrder
}; // End of function BinarySearchTree

var _input = "3\n\n5\n4\n7\n2\n1";

var tree = new BinarySearchTree();
var root = null;

var values = _input.split('\n').map(Number);

for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
}

tree.levelOrder(root);
