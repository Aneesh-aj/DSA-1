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
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
    }
    display(){
        let current = this.head
        let sum =0
        while(current!=null){
            console.log(current.value)
            sum += current.value
            current = current.next
        }
        console.log("sum is :"+ sum)
    }
}

const list = new linkedlist();

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)

list.display()
// console.log(list);