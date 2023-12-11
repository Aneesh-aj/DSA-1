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
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    appand(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
        
    }
    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}
const list = new linkedlist()

list.appand(10)
list.appand(20)
list.appand(30)
list.display()