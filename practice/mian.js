class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    
  
    append(value) {
      const newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    display() {
      let current = this.head;
    //   let listValues = '';
  
      while (current) {
         console.log(current.value)
        // listValues += current.value + ' ';
        current = current.next;
      }
  
    //   console.log(listValues);
    }
  }
  
  const list = new LinkedList();
  
  list.append(10);
  list.append(20);
  list.append(30);
  
  list.display();
  