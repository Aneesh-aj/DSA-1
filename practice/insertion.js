class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    reverse(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      } else {
        const node = new Node(value);
        if (index === 0) {
          node.next = this.head;
          this.head = node;
        } else {
          let prev = this.head;
          for (let i = 0; i < index-1; i++) {
            prev = prev.next;
          }
          node.next = prev.next;
          prev.next = node;
        }
        this.size++;
      }
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  const list = new LinkedList();
  
  list.reverse(10);
  list.reverse(20);
  list.reverse(30);
  list.insert(40, 2);
  list.display();
  