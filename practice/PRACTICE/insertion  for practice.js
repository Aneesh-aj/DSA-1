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

    insertAfter(valueindex , value){
        const node = new Node(value)

        if(this.head === valueindex){
            node.next = this.head
            this.head = node
        }
        
        let current = this.head
        let prev = null

        while(current !== null && current.value !==valueindex){
            prev = current
            current = current.next
        }

        node.next = current
        prev.next = node

    }

    display(){
        let pri = this.head
        while(pri){
            console.log(pri.value)
            pri = pri.next
        }
    }
}

const list = new linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)

 list.insertAfter(30 ,25)
list.display()
