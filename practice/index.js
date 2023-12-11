class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class linkedlist{
   

    constructor(){
         this.head = null
         this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    append(data) {
        const node = new Node(data);
    
        if (this.isEmpty()) {
          this.head = node;
        } else {
          let prev = this.head;
          while (prev.next) {
            prev = prev.next;
          }
          prev.next = node;
        }
        this.size++;
      }
   display() {
    let prev = this.head
    let listvalue = ''
     while(prev){
      console.log(prev.value)
      listvalue += prev.value
        prev = prev.next
     }
     console.log(listvalue)
    
 }
}

const list = new linkedlist()


list.append(10)
list.append(20)
list.append(30)
list.display()