class Node {
    constructor(data) {
        this.data = data;
        this.ref = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addNode(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.ref = null;
        } else {
            this.tail.ref = newNode;
            this.tail = newNode;
            this.tail.ref = null;
        }
    }

    deleteNode(value) {

        let temp = this.head;
        let previous = null;
        if (temp !== null && temp.data === value) {
            this.head = temp.ref;
            return;
        }
        while (temp !== null && temp.data !== value) {
            previous = temp;
            temp = temp.ref;
        }

        if (temp === null) {
            console.log("Not founded");
            return;
        }
        if (temp === this.tail) {
            this.tail = previous;
            this.tail.ref = null;
        }

        previous.ref = temp.ref;

    }
    insertAfter(prev, data) {
        const newNode = new Node(data);
        let temp = this.head;
        while (temp !== null && temp.data !== prev) {
            temp = temp.ref;
        }
        if (temp === null) {
            console.log("not founded");
            return;
        }
        if (temp === this.tail) {
            this.tail.ref = newNode;
            this.tail = newNode;
            this.tail.ref = null;
            return;
        }
        newNode.ref = temp.ref;
        temp.ref = newNode;

    }

    insertBefore(pos, newData) {
        const newNode = new Node(newData);

        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        if (this.head.data === pos) {
            newNode.ref = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current !== null && current.data !== pos) {
            previous = current;
            current = current.ref;
        }

        if (current === null) {
            console.log("Node not found");
            return;
        }

        newNode.ref = current;
        previous.ref = newNode;
    }

    display() {
        let temp = this.head;
        if (temp === null) {
            console.log("list is empty");
        } else {
            while (temp !== null) {
                console.log(temp.data);
                temp = temp.ref;
            }
        }

    }
}

const list = new linkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(50);
console.log(" insert after");
list.insertAfter(30, 40);
list.display();
console.log(" insert before");
list.insertBefore(30, 5);
list.display();