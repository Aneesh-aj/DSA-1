class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(value){
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
    inserAfter(indexvalue , value){
        const node = new Node(value)
        let current = this.head
        while(current !== null && current.value !== indexvalue ){
              current = current.next
        }
        if(this.head !== null){
            node.next = current.next
            current.next = node
            
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

const list = new linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)

list.inserAfter(30,35)
list.display()