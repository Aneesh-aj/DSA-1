class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
    }

    prepend(value){
        const node = new Node(value);   
        
        if(this.head === null){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
    }
    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

const list = new  linkedlist()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.prepend(70)

list.display()

