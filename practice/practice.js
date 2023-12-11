class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail= null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    append(value){
        const node =new Node(value)

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
        let str=''
        let current = this.head
        while (current){
            str=str+current.value+'->'
            current = current.next
        }
       console.log(str)
    }
}

const list = new linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.display()