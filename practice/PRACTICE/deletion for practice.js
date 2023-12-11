class Node {
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

    appand(value){
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
    delete(indexvalue ){
        let current = this.head
        let prev = null
       if(this.head === indexvalue){
           this.head = current.next
           
           return 
       }
      
       while(current !== null && current.value !== indexvalue){
            prev = current
            current = current.next
       }

       if(current === null){
         console.log("not found")
       }
         prev.next = current.next
         

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

list.delete(20)
list.display()