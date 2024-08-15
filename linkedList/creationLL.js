class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}
class LinkedList {
    constructor() {
        this.head = null; 
    }
    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAfter(prevValue, value) {
        let current = this.head;

        while (current !== null && current.value !== prevValue) {
            current = current.next;
        }

        if (current !== null) {
            const newNode = new Node(value);
            newNode.next = current.next;
            current.next = newNode;
        } else {
            console.log(`Node with value ${prevValue} not found.`);
        }
    }
//Deletion 

deleteHead() {
    if (this.head !== null) {
        this.head = this.head.next;
    } else {
        console.log("List is empty.");
    }
}

deleteTail() {
    if (this.head === null) {
        console.log("List is empty.");
    } else if (this.head.next === null) {
        this.head = null;
    } else {
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    }
}

deleteValue(value) {
    if (this.head === null) {
        console.log("List is empty.");
        return;
    }

    if (this.head.value === value) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
        current = current.next;
    }

    if (current.next !== null) {
        current.next = current.next.next;
    } else {
        console.log(`Node with value ${value} not found.`);
    }
}
    printList() {
        let current = this.head;
        let listValues = [];
        while (current !== null) {
            listValues.push(current.value);
            current = current.next;
        }
        console.log(listValues.join(' -> '));
    }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.prepend(5);
ll.prepend(1);


ll.printList();
